import graphene
from account.models import Account
from account.types import AccountType
from businessowner.types import BusinessownerType
from businessowner.models import Businessowner
from admina.models import Admina
from graphene_file_upload.scalars import Upload


#create admin 
class CreateAdminAccount(graphene.Mutation):
    invited_by = graphene.Field(AccountType)
    account     = graphene.Field(AccountType)
    success = graphene.Boolean()
    message = graphene.String()
    error = graphene.String()

    #supply arguments
    class Arguments:
        account_id  = graphene.Int(required=True)
        profile_pic = Upload()
    
    #save to database/model
    def mutate(self, info, account_id):
        adminExists = Admina.objects.all().exists()
        userAdminExists = Admina.objects.filter(account_id = account_id).exists()
        if(userAdminExists):
            return CreateAdminAccount(
                success = False,
                message="USER ALREADY REGISTERED"
            )
        user = info.context.user   
            
        if(adminExists):
            user = info.context.user
            if(user.is_anonymous):
                return CreateAdminAccount(
                    success = False,
                    message = "An admin can only add admins", 
                
                )
            if(user.user_type != "Admin"):
                return(
                {
                    "success":False,
                    "message":"Admins can only invite admins"
                }
            )     
            #an admin that exists   
            userAExists = Account.objects.filter(id = user.id).exists()
            if(userAExists):
                userA = Account.objects.get(id = user.id)
                newAdminExists = Account.objects.filter(id = account_id).exists()
                if(newAdminExists):
                    newAdminAccount = Account.objects.get(id = account_id)
                    if(newAdminAccount.id == userA.id):
                         return CreateAdminAccount(
                            success=False,
                            message="Should be added by other admins"
                        )
                    ## if user exists update the account db and save
                    # newAdminAccount.is_admin = True
                    newAdminAccount.account_linked = True
                    newAdminAccount.save()
                    
                    admin = Admina( 
                        account = newAdminAccount,
                        invited_by = userA,

                    )
                else:
                    return CreateAdminAccount(
                        success=False,
                        message="Account not found"
                        
                    )
            

            
        else:
            newAdminExists = Account.objects.filter(id = account_id).exists()
            if(newAdminExists):
                user = Account.objects.get(id = account_id)
                if user.user_type != 'Admin':
                    return CreateAdminAccount(
                        success = False,
                        message = "User is not an admin"
                    )
                admin = Admina( 
                    account = user,
                    invited_by  = user      #invited by self
                )
                user.account_linked = True
                user.save()
               
                
        admin.save()
        return CreateAdminAccount(
                invited_by = admin.invited_by,
                success = True,
                message = "Admin account created successfully"
        )



#no account is deleted just be inactive
class DeleteAdminAccount(graphene.Mutation):
    id =graphene.Int()
    is_active = graphene.Boolean()

    class Arguments:
        id = graphene.Int()

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Login first")

        if(user.user_type== 'Business Owner'):
            raise Exception("Business Owner can't delete Investor account")
        user_id = kwargs["id"] if "id" in kwargs else user.id
        account = Account.objects.get(pk = user_id)
        account.is_active = False
        account.save()
        # or we could just delete the account using account.delete()

        return DeleteAdminAccount(
            id = account.id,
            is_active = account.is_active,
            success = True,
            message = "Admin account deactivated"

        )


class ApproveBusinessAccount(graphene.Mutation):
    updatedBusiness = graphene.Field(BusinessownerType)
    success  = graphene.Boolean()
    message = graphene.String()

    class Arguments:
        business_id = graphene.Int(required=True)

    def mutate(self,info,business_id):
        user = info.context.user
        if(user.is_anonymous):
            return ApproveBusinessAccount(
                success = False,
                message = "Not logged in!"
            )
        if(user.user_type != "Admin"):
            return ApproveBusinessAccount(
                
                    success=False,
                    message="Admins can only approve business accounts"
                
            )
        businessToBeApprovedExists =  Businessowner.objects.filter(id = business_id).exists()
        if(not businessToBeApprovedExists):
            return ApproveBusinessAccount(
                success = False,
                message = "Business doesnt exist"
            )
        businessToBeApproved = Businessowner.objects.get(id = business_id)
        if(businessToBeApproved.is_valid_account == "AP"):
            return ApproveBusinessAccount(
                
                    success=False,
                    message="Account is active already"
                
            )
        else:
            businessToBeApproved.is_valid_account = "AP"
            businessToBeApproved.save()
        return ApproveBusinessAccount   (
            businessToBeApproved,
            success=True,
            message="Business approved"
        )

class DeclineBusinessAccount(graphene.Mutation):
    updatedBusiness = graphene.Field(BusinessownerType)
    success  = graphene.Boolean()
    message = graphene.String()

    class Arguments:
        business_id = graphene.Int(required=True)
    def mutate(self,info,business_id):
        user = info.context.user
        if(user.user_type != "Admin"):
            return(
                {
                    "success":False,
                    "message":"Admins can only decline business accounts"
                }
            )
        businessToBeApproved = Businessowner.objects.get(id = business_id)
        print("account valid", businessToBeApproved.is_valid_account)
        if(businessToBeApproved.is_valid_account == "DE"):
            return(
                {
                    "success":False,
                    "message":"Business account is inactive already"
                }
            )
        else:
            businessToBeApproved.is_valid_account = "DE"
            businessToBeApproved.save()

        return ApproveBusinessAccount   (
            businessToBeApproved, 
            success = True,
            message = "Declined Business Account"
        )


class DeactivateAccount(graphene.Mutation):
    deactivatedAccount = graphene.Field(AccountType)
    class Arguments:
        account_id = graphene.Int(required=True)
    def mutate(self,info,account_id):
        user = info.context.user
        if(user.user_type != "Admin"):
            return(
                {
                    "success":False,
                    "message":"Admins can only approve business accounts"
                }
            )
        try:
            accountToBeDeactivated = Account.objects.get(id = account_id)
            accountToBeDeactivated.is_active = False
            accountToBeDeactivated.save()
        except:
            return(
                {
                    "success":False,
                    "message":"Business with id: "+str(account_id)+" doesn't exist"
                }
            )
        return DeactivateAccount(
            deactivatedAccount = accountToBeDeactivated
        )

class ActivateAccount(graphene.Mutation):
    activatedAccount = graphene.Field(AccountType)
    class Arguments:
        account_id = graphene.Int(required=True)
    def mutate(self,info,account_id):
        user = info.context.user
        if(user.user_type != "Admin"):
            return(
                {
                    "success":False,
                    "message":"Admins can only approve business accounts"
                }
            )
        try:
            accountToBeActivated = Account.objects.get(id = account_id)
            accountToBeActivated.is_active = True
            accountToBeActivated.save()
        except:
            return(
                {
                    "success":False,
                    "message":"Business with id: "+str(account_id)+" doesn't exist"
                }
            )        
        return ActivateAccount(
            activatedAccount = accountToBeActivated, 
            success = True,
            message="Account Activated"
        )    



#register mutations
class Mutation(graphene.ObjectType):
    create_admin = CreateAdminAccount.Field()
    delete_admin = DeleteAdminAccount.Field()

    approve_business_account = ApproveBusinessAccount.Field()
    decline_business_account = DeclineBusinessAccount.Field()
    deactivate_account = DeactivateAccount.Field()
    activate_account = ActivateAccount.Field()



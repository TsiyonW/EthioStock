import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from django.db.models import Q
from account.models import Account
from account.types import AccountType
from graphql_jwt.shortcuts import create_refresh_token, get_token
from graphene_file_upload.scalars import Upload

from graphql_auth import mutations
#creating business owner account
class CreateBusinessownerAccount(graphene.Mutation):
    id = graphene.Int()
    business_name    = graphene.String()
    account     = graphene.Field(AccountType)
    website     = graphene.String()
    category    = graphene.String()
    is_valid_account = graphene.String()
    legality = graphene.String()
    account_linked = graphene.Boolean()
    profile_pic = Upload()
    message = graphene.String()
    success = graphene.Boolean()
    #supply arguments
    class Arguments:
        business_name   = graphene.String(required=True)
        website     = graphene.String()
        category    =  graphene.String(required=True)
        legality    = Upload()
        profile_pic = Upload()

    #populate the inputs to the database
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return CreateBusinessownerAccount(
                success=False,
                message="Not Logged in!")

        if(user.user_type != 'Businessowner'):
            return CreateBusinessownerAccount(
               success=False,
                message="Cannot create a businessowner account")

        userExists = Account.objects.filter(id = user.id).exists()
        if(not userExists):
            return CreateBusinessownerAccount(
                success=False,
                message="User doesnt exist")
        
        user = Account.objects.get(id =  user.id)
        businessAccountExists = Businessowner.objects.filter(account_id =user.id)
        if(businessAccountExists):
            return CreateBusinessownerAccount(
                success=False,
                message="Business Account Exists Try updating instead"
            )
        business_name = kwargs['business_name']
        website    = kwargs['website'] if 'website' in kwargs else ''
        category   = kwargs['category'] if 'category' in kwargs else ''
        legality   = kwargs['legality'] if 'legality' in kwargs else ''
        profile_pic = kwargs['profile_pic'] if 'profile_pic'  in kwargs else ''
        
        businessowner = Businessowner(
            business_name  = business_name, 
            account   = user,
            website   = website,
            category  = category,
            legality  = legality,
            profile_pic =profile_pic,
        )
        
        # result = Account.object.all().filter(Q(id = 49)|Q(username = "watever"))
        
        businessowner.save()
        #if business account created successfully make associate account true
        if(businessowner):
            user.account_linked = True
            user.save()

        #return the fields below to users
        return CreateBusinessownerAccount(
            id = businessowner.account_id,
            business_name = businessowner.business_name, 
            website  = businessowner.website,
            category = businessowner.category,
            account  = businessowner.account,
            is_valid_account = businessowner.is_valid_account,
            success = True,
            message="Business account created successfully"
        )

#update business account
class UpdateBusinessownerAccount(graphene.Mutation):
    #user can update the following fields
    website     = graphene.String()
    category    = graphene.String()
    legality    = graphene.String()
    business_name    = graphene.String()
    success     = graphene.Boolean()
    message     = graphene.String()
    profile_pic = Upload()
    #let the user supply one of the following but the password is required
    class Arguments:
        
        business_name     = graphene.String() 
        woreda      = graphene.Int()    
        website     = graphene.String()
        category    = graphene.String()
        legality    = Upload()
        profile_pic = Upload()

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return UpdateBusinessownerAccount(
                success = False, 
                message = "Must login first"
            )
        if(user.user_type != "Investor"):
            return UpdateBusinessownerAccount(
                success = False, 
                message = "only for Business owners"
            )
        account = Account.objects.get(id = user.id)
        if (account.id != user.id):
            return UpdateBusinessownerAccount(
                success = False, 
                message = "Can only update your account"
            )

        businessowneraccountExists = Businessowner.objects.filter(account_id = user.id)
        if(not businessowneraccountExists):
            return UpdateBusinessownerAccount(
                success = False, 
                message = "Business account doesn't exist"
            )

        businessowneraccount = Businessowner.objects.get(account_id = user.id)
        
        businessowneraccount.website    = kwargs['website'] if 'website'  in kwargs else businessowneraccount.website
        businessowneraccount.category   = kwargs['category'] if 'category' in kwargs else businessowneraccount.category
        businessowneraccount.legality   = kwargs['legality'] if 'legality' in kwargs else businessowneraccount.legality
        businessowneraccount.profile_pic   = kwargs['profile_pic'] if 'profile_pic' in kwargs else businessowneraccount.profile_pic
        businessowneraccount.business_name   = kwargs['business_name'] if 'business_name' in kwargs else businessowneraccount.business_name
        businessowneraccount.save()
        

        return UpdateBusinessownerAccount(
            account_id       = account.id,
            website     = businessowneraccount.website,
            category    = businessowneraccount.category,
            legality    = businessowneraccount.legality,
            business_name    = businessowneraccount.business_name, 
            success = True,
            message = "Businesss updated successfully"
            )

class DeleteMyBusinessownerAccount(graphene.Mutation):
    deletedAccount = graphene.Field(AccountType)
    
    def mutate(self,info,account_id):
        user = info.context.user
        if user.is_anonymous:
            return UpdateBusinessownerAccount(
                success = False, 
                message = "Must login first"
            )
        userExists = Account.objects.filter(id = user.id).exists()
        if(not userExists):
            return CreateBusinessownerAccount(
                success=False,
                message="User doesnt exist")

        accountToBeDeleted = Account.objects.get(id = user.id)
        if (accountToBeDeleted.id != user.id):
            return UpdateBusinessownerAccount(
                success = False, 
                message = "Can only delete your account"
            )
            
        accountToBeDeleted.is_active = False
        accountToBeDeleted.save()
        return DeleteMyBusinessownerAccount(
            deletedAccount = accountToBeDeleted,
            success = True,
            message = "Bussiness owner account deactivated"

        )


class Mutation(graphene.ObjectType):
    create_businessowner = CreateBusinessownerAccount.Field()
    update_businessowner = UpdateBusinessownerAccount.Field()
    delete_businessowner = DeleteMyBusinessownerAccount.Field()
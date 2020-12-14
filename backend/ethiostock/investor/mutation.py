import graphene
from account.models import Account
from account.types import AccountType
from investor.models import Investor
from investor.types import InvestorType
from graphql_jwt.shortcuts import create_refresh_token, get_token
from graphene_file_upload.scalars import Upload


#create investor 
class CreateInvestorAccount(graphene.Mutation):
    investor_created = graphene.Field(InvestorType)
    success = graphene.Boolean()
    message = graphene.String()

    #supply arguments
    class Arguments:
        investor_kebele = graphene.String(required=True)
        investor_occupation = graphene.String()
        investor_house_no = graphene.String()
        investor_resident_ID = graphene.String()
        investor_driving_licence_ID = graphene.String()
        investor_passport_number = graphene.String()
        investor_nationality = graphene.String(required=True)
        respondent_first_name  = graphene.String(required=True)
        respondent_middle_name = graphene.String(required=True)
        respondent_last_name  = graphene.String(required=True)
        respondent_kebele   = graphene.String()
        respondent_house_no  = graphene.String()
        respondent_occupation   = graphene.String()
        respondent_phone_no = graphene.String(required=True)
        respondent_resident_ID = graphene.String()
        respondent_driving_licence_ID  = graphene.String()
        respondent_passport_number = graphene.String()
        profile_pic = Upload()

    #save to database/model
    def mutate(self, info,  **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return CreateInvestorAccount(
                success=False,
                message="Not Logged in!"
                )

        if(user.user_type != 'Investor'):
            return CreateInvestorAccount(
                success=False,
                message="Cannot create a investor account"
                )

        userExists = Account.objects.filter(id = user.id).exists()
        if(not userExists):
            return CreateInvestorAccount(
                success=False,
                message="User doesnt exist"
                )
        investorExists = Investor.objects.filter(account_id = user.id).exists()
        if(investorExists):
            return CreateInvestorAccount(
                success=False,
                message= "Investor account exists"
            )

        user = Account.objects.get(id =  user.id)
        investor_occupation = kwargs['investor_occupation'] if 'investor_occupation' in kwargs else ''
        investor_house_no = kwargs['investor_house_no'] if 'investor_house_no'  in kwargs else ''
        investor_resident_ID = kwargs['investor_resident_ID'] if 'investor_resident_ID'  in kwargs else ''
        investor_driving_licence_ID = kwargs['investor_driving_licence_ID'] if 'investor_driving_licence_ID'  in kwargs else ''
        investor_passport_number = kwargs['investor_passport_number'] if 'investor_passport_number'  in kwargs else ''
        respondent_house_no  = kwargs['respondent_house_no'] if 'respondent_house_no'  in kwargs else ''
        respondent_occupation   =  kwargs['respondent_occupation'] if 'respondent_occupation'  in kwargs else ''
        respondent_resident_ID = kwargs['respondent_resident_ID'] if 'respondent_resident_ID'  in kwargs else ''
        respondent_driving_licence_ID  = kwargs['respondent_driving_licence_ID'] if 'respondent_driving_licence_ID'  in kwargs else ''
        respondent_passport_number = kwargs['respondent_passport_number'] if 'respondent_passport_number'  in kwargs else ''
        profile_pic = kwargs['profile_pic'] if 'profile_pic'  in kwargs else ''
        respondent_kebele = kwargs['respondent_kebele'] if 'respondent_kebele'  in kwargs else ''


        investor = Investor(
            account     = user,
            investor_kebele = kwargs['investor_kebele'],
            investor_occupation = investor_occupation,
            investor_house_no = investor_house_no,
            investor_resident_ID = investor_resident_ID,
            investor_driving_licence_ID = investor_driving_licence_ID,
            investor_passport_number = investor_passport_number,
            investor_nationality = kwargs['investor_nationality'],
            respondent_first_name = kwargs['respondent_first_name'],
            respondent_middle_name = kwargs['respondent_middle_name'],
            respondent_last_name  = kwargs['respondent_last_name'],
            respondent_kebele  = respondent_kebele,
            respondent_house_no = respondent_house_no,
            respondent_occupation  = respondent_occupation,
            respondent_phone_no = kwargs['respondent_phone_no'],
            respondent_resident_ID = respondent_resident_ID,
            respondent_driving_licence_ID =respondent_driving_licence_ID,
            respondent_passport_number = respondent_passport_number,
            profile_pic = profile_pic,
        )
        
        investor.save()        
        if(investor):
            user.account_linked = True        
            user.save()

            return CreateInvestorAccount(
                    investor_created = investor,
                    success = True,
                    message ="Investor created successfully"
            )
        else:
            return CreateInvestorAccount(
                success= False, 
                message="cannot create investor"
            )


#update investor account
class UpdateInvestorAccount(graphene.Mutation):
    updatedInvestor = graphene.Field(InvestorType)
    success = graphene.Boolean()
    message = graphene.String()
    #let the user supply the fields he/she wants to update
    class Arguments:
        investor_kebele = graphene.String()
        investor_occupation = graphene.String()
        investor_house_no = graphene.String()
        investor_resident_ID = graphene.String()
        investor_driving_licence_ID = graphene.String()
        investor_passport_number = graphene.String()
        investor_nationality = graphene.String()
        respondent_first_name  = graphene.String()
        respondent_middle_name = graphene.String()
        respondent_last_name  = graphene.String()
        respondent_kebele   = graphene.String()
        respondent_house_no  = graphene.String()
        respondent_occupation   = graphene.String()
        respondent_phone_no = graphene.String()
        respondent_resident_ID = graphene.String()
        respondent_driving_licence_ID  = graphene.String()
        respondent_passport_number = graphene.String()
        profilePic = Upload()
        
    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return UpdateInvestorAccount(
                success = False,
                message = "Must Login First"
            )
        elif(user.user_type != "Investor"):
            return UpdateInvestorAccount(
                success = False,
                message = "User must be an investor"
            )

        investorAccountExists = Investor.objects.filter(account_id = user.id).exists()
        if(investorAccountExists):
            invAcc = Investor.objects.get(account_id = user.id)
        
            invAcc.investor_kebele = kwargs['investor_kebele'] if 'investor_kebele' in kwargs else invAcc.investor_kebele
            invAcc.investor_occupation   = kwargs['investor_occupation'] if 'investor_occupation' in kwargs else invAcc.investor_occupation
            invAcc.investor_house_no   = kwargs['investor_house_no'] if 'investor_house_no'  in kwargs else invAcc.investor_house_no
            invAcc.investor_resident_ID    = kwargs['investor_resident_ID'] if 'investor_resident_ID'  in kwargs else invAcc.investor_resident_ID
            invAcc.investor_driving_licence_ID    = kwargs['investor_driving_licence_ID'] if 'investor_driving_licence_ID'  in kwargs else invAcc.investor_driving_licence_ID
            invAcc.investor_passport_number    = kwargs['investor_passport_number'] if 'investor_passport_number'  in kwargs else invAcc.investor_passport_number
            invAcc.investor_nationality   = kwargs['investor_nationality'] if 'investor_nationality'  in kwargs else invAcc.investor_nationality
            invAcc.respondent_first_name    = kwargs['respondent_first_name'] if 'respondent_first_name'  in kwargs else invAcc.respondent_first_name
            invAcc.respondent_middle_name    = kwargs['respondent_middle_name'] if 'respondent_middle_name'  in kwargs else invAcc.respondent_middle_name
            invAcc.respondent_last_name    = kwargs['respondent_last_name'] if 'respondent_last_name'  in kwargs else invAcc.respondent_last_name
            invAcc.respondent_kebele    = kwargs['respondent_kebele'] if 'respondent_kebele'  in kwargs else invAcc.respondent_kebele
            invAcc.respondent_house_no   = kwargs['respondent_house_no'] if 'respondent_house_no'  in kwargs else invAcc.respondent_house_no
            invAcc.respondent_occupation    = kwargs['respondent_occupation'] if 'respondent_occupation'  in kwargs else invAcc.respondent_occupation
            invAcc.respondent_phone_no    = kwargs['respondent_phone_no'] if 'respondent_phone_no'  in kwargs else invAcc.respondent_phone_no
            invAcc.respondent_resident_ID   = kwargs['respondent_resident_ID'] if 'respondent_resident_ID'  in kwargs else invAcc.respondent_resident_ID
            invAcc.respondent_driving_licence_ID    = kwargs['respondent_driving_licence_ID'] if 'respondent_driving_licence_ID'  in kwargs else invAcc.respondent_driving_licence_ID
            invAcc.respondent_passport_number    = kwargs['respondent_passport_number'] if 'respondent_passport_number'  in kwargs else invAcc.respondent_passport_number
            invAcc.profile_pic    = kwargs['profile_pic'] if 'profile_pic'  in kwargs else invAcc.profile_pic
            
            invAcc.save()


            return UpdateInvestorAccount(
                updatedInvestor = invAcc,
                success = True,
                message = "Investor account updated successfully"

            )
        else:
            return UpdateInvestorAccount(
                success = False,
                message = "Investor account doesnt exist"
            )


#no account is deleted just be inactive
class DeleteInvestorAccount(graphene.Mutation):
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
        
        return DeleteInvestorAccount(
            id = account.id,
            is_active = account.is_active
        )




#register mutations
class Mutation(graphene.ObjectType):
    create_investor = CreateInvestorAccount.Field()
    update_investor = UpdateInvestorAccount.Field()
    delete_investor = DeleteInvestorAccount.Field()
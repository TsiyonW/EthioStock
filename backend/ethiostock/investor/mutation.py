import graphene
from account.models import Account
from account.types import AccountType
from investor.models import Investor
from graphql_jwt.shortcuts import create_refresh_token, get_token


#create investor 
class CreateInvestorAccount(graphene.Mutation):
    id          = graphene.Int()
    username    = graphene.String()
    password    = graphene.String()
    email       = graphene.String()
    last_name   = graphene.String()
    first_name  = graphene.String()
    phoneNo     = graphene.String()
    sex         = graphene.String() 
    subcity     = graphene.String() 
    woreda      = graphene.Int()
    nationality = graphene.String()
    user_type   = graphene.String()
    account     = graphene.Field(AccountType)
    success = graphene.Boolean()
    token = graphene.String()
    refresh_token = graphene.String()

    #supply arguments
    class Arguments:
        username    = graphene.String(required=True)
        password    = graphene.String(required=True)
        email       = graphene.String(required=True)
        last_name   = graphene.String(required=True)
        first_name  = graphene.String(required=True)
        phoneNo     = graphene.String(required=True)
        sex         = graphene.String(required=True) 
        subcity     = graphene.String(required=True) 
        woreda      = graphene.Int(required=True)
        nationality = graphene.String(required=True)

    #save to database/model
    def mutate(self, info, username, password, email, last_name, first_name,phoneNo, sex, subcity, woreda, nationality):
        user_type = "Investor"
        user = Account(
            username    = username,
            password    = password,
            email       = email,
            last_name   = last_name,
            first_name  = first_name,
            phoneNo     = phoneNo,
            sex         = sex,
            subcity     = subcity,
            woreda      = woreda,
            user_type   = user_type
        )
        investor = Investor(
            nationality = nationality,
            account     = user
        )
        user.set_password(password)
        user.save()
        
        investor.save()
        token = get_token(user)
        refresh_token = create_refresh_token(user)

        return CreateInvestorAccount(
                id=investor.account_id,
                username=user.username,
                first_name=user.first_name,
                last_name = user.last_name,
                email = user.email,
                phoneNo = user.phoneNo,
                sex = user.sex,
                subcity = user.subcity,
                woreda = user.woreda,
                user_type = user.user_type,
                nationality = investor.nationality, 
                token = token,
                refresh_token = refresh_token,
                success = True,
        )


#update investor account
class UpdateInvestorAccount(graphene.Mutation):
    #user can update the following fields
    email       = graphene.String()
    sex         = graphene.String() 
    subcity     = graphene.String() 
    woreda      = graphene.Int()    
    nationality = graphene.String()
    first_name  = graphene.String()
    last_name   = graphene.String()
    password    = graphene.String()

    #let the user supply one of the following but the password is required
    class Arguments:
        
        email       = graphene.String()
        sex         = graphene.String() 
        subcity     = graphene.String() 
        woreda      = graphene.Int()    
        nationality = graphene.String() 
        first_name  = graphene.String()
        last_name   = graphene.String()
        password    = graphene.String(required=True)  

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must login first")
        elif(user.user_type == "Business Owner"):
            raise Exception("only for Investors")
        

        account = Account.objects.get(id = user.id)
        investorAccount = Investor.objects.get(account_id = user.id)

        password = kwargs['password']
        account.email       = kwargs['email'] if "email" in kwargs else user.email
        account.sex         = kwargs['sex'] if 'sex' in kwargs else user.sex
        account.subcity     = kwargs['subcity'] if 'subcity' in kwargs else user.subcity
        account.woreda      = kwargs['woreda'] if 'woreda' in kwargs else user.woreda
        account.first_name  = kwargs['first_name'] if 'first_name' in kwargs else user.first_name
        account.last_name   = kwargs['last_name'] if 'last_name' in kwargs else user.last_name
        investorAccount.nationality    = kwargs['nationality'] if 'nationality'  in kwargs else investorAccount.nationality
        
        account.set_password(password)
        account.save()
        investorAccount.save()


        return UpdateInvestorAccount(
            email       = account.email,
            first_name  = account.first_name,
            last_name   = account.last_name,
            nationality = investorAccount.nationality,
            sex         = account.sex,
            subcity     = account.subcity,
            woreda      = account.woreda

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
        # or we could just delete the account using account.delete()

        return DeleteInvestorAccount(
            id = account.id,
            is_active = account.is_active
        )




#register mutations
class Mutation(graphene.ObjectType):
    create_investor = CreateInvestorAccount.Field()
    update_investor = UpdateInvestorAccount.Field()
    delete_investor = DeleteInvestorAccount.Field()
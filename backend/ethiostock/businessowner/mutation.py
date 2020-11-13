import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from django.db.models import Q
from account.models import Account
from account.types import AccountType
from graphql_jwt.shortcuts import create_refresh_token, get_token
from graphene_file_upload.scalars import Upload

#creating business owner account
class CreateBusinessownerAccount(graphene.Mutation):
    id = graphene.Int()
    username    = graphene.String()
    password    = graphene.String()
    email       = graphene.String()
    last_name   = graphene.String()
    first_name  = graphene.String()
    phoneNo     = graphene.String()
    sex         = graphene.String() 
    subcity     = graphene.String() 
    woreda      = graphene.Int()    
    business    = graphene.String()
    website     = graphene.String()
    category    = graphene.String()
    legality    = graphene.String()
    success = graphene.Boolean()
    token = graphene.String()
    refresh_token = graphene.String()
    account     = graphene.Field(AccountType)
    user_type   = graphene.String()
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
        business    = graphene.String(required=True)
        website     = graphene.String(required=True)
        category    =  graphene.String(required=True)
        legality    = Upload()
    #populate the inputs to the database
    def mutate(self, info, username, password, email, last_name, first_name,
                phoneNo, sex, subcity, woreda, business,
                website, legality, category):
        user_type = "Business Owner"
        user =  Account(
            username    =username,
            password    = password,
            email       = email,
            subcity     = subcity,
            last_name   = last_name,
            first_name  = first_name,
            phoneNo     = phoneNo,
            sex         = sex,
            woreda      = woreda,
            user_type = user_type
        )

        businessowner = Businessowner(
            business  = business, 
            website   = website,
            category  = category,
            legality  = legality,
            account   = user
        )
        
        # result = Account.object.all().filter(Q(id = 49)|Q(username = "watever"))
        # save the user's account
        user.set_password(password)
        user.save()
        businessowner.save()
        
        token = get_token(user)
        refresh_token = create_refresh_token(user)

        #return the fields below to users
        return CreateBusinessownerAccount(
            id = businessowner.account_id,
            business = businessowner.business, 
            website  = businessowner.website,
            category = businessowner.category,
            legality = businessowner.legality.url,
            account  = businessowner.account,
            username = user.username,
            password = user.password,
            email    = user.email,
            first_name  = user.first_name,
            last_name   = user.last_name,
            phoneNo     = user.phoneNo,
            sex         = user.sex,
            subcity     = user.subcity,
            woreda      = user.woreda,
            user_type   = user.user_type,
            token = token,
            refresh_token = refresh_token,
            success = True,
        )

#update business account
class UpdateBusinessownerAccount(graphene.Mutation):
    #user can update the following fields
    email       = graphene.String()
    sex         = graphene.String() 
    subcity     = graphene.String() 
    woreda      = graphene.Int()    
    website     = graphene.String()
    category    = graphene.String()
    legality    = graphene.String()
    first_name  = graphene.String()
    last_name   = graphene.String()
    password    = graphene.String()

    #let the user supply one of the following but the password is required
    class Arguments:
        
        email       = graphene.String()
        sex         = graphene.String() 
        subcity     = graphene.String() 
        woreda      = graphene.Int()    
        website     = graphene.String()
        category    = graphene.String()
        legality    = graphene.Upload()  
        first_name  = graphene.String()
        last_name   = graphene.String()
        password    = graphene.String(required=True)  

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must login first")
        elif(user.user_type == "Investor"):
            raise Exception("only for Business owners")
        

        account = Account.objects.get(id = user.id)
        businessowneraccount = Businessowner.objects.get(account_id = user.id)

        password = kwargs['password']
        account.email       = kwargs['email'] if "email" in kwargs else user.email
        account.sex         = kwargs['sex'] if 'sex' in kwargs else user.sex
        account.subcity     = kwargs['subcity'] if 'subcity' in kwargs else user.subcity
        account.woreda      = kwargs['woreda'] if 'woreda' in kwargs else user.woreda
        account.first_name  = kwargs['first_name'] if 'first_name' in kwargs else user.first_name
        account.last_name   = kwargs['last_name'] if 'last_name' in kwargs else user.last_name
        businessowneraccount.website    = kwargs['website'] if 'website'  in kwargs else businessowneraccount.website
        businessowneraccount.category   = kwargs['category'] if 'category' in kwargs else businessowneraccount.category
        businessowneraccount.legality   = kwargs['legality'] if 'legality' in kwargs else businessowneraccount.legality
        
        account.set_password(password)
        account.save()
        businessowneraccount.save()


        return UpdateBusinessownerAccount(
            email       = account.email,
            first_name  = account.first_name,
            last_name   = account.last_name,
            website     = businessowneraccount.website,
            category    = businessowneraccount.category,
            legality    = businessowneraccount.legality.url,
            sex         = account.sex,
            subcity     = account.subcity,
            woreda      = account.woreda

        )

#no account is deleted just be inactive
class DeleteBusinessownerAccount(graphene.Mutation):
    id =graphene.Int()
    is_active = graphene.Boolean()

    class Arguments:
        id = graphene.Int()

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Login first")

        if(user.user_type== 'Investor'):
            raise Exception("Investors can't delete Business account")

        account = Account.objects.get(pk=kwargs["id"])
        account.is_active = False
        account.save()
        # or we could just delete the account using account.delete()

        return DeleteBusinessownerAccount(
            id = account.id,
            is_active = account.is_active
        )



class Mutation(graphene.ObjectType):
    create_businessowner = CreateBusinessownerAccount.Field()
    update_businessowner = UpdateBusinessownerAccount.Field()
    delete_businessowner = DeleteBusinessownerAccount.Field()
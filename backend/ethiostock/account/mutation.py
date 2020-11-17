import graphene
from  account.models import  Account
from .types import AccountType
from .types import BusinessownerType
from .models import Businessowner

#create account api
class CreateAccount(graphene.Mutation):
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
    user_type   = graphene.String()
    #list the arguments
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

    #pass the arguments and save it to the models
    def mutate(self, info, username, password, email,last_name, 
        first_name,user_type,phoneNo, sex, subcity, woreda):

        user =  Account(
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
        user.set_password(password)
        user.save()
        if not user:
            raise Exception("Can not create user!")
        return CreateAccount(
            id          = user.id,
            username    = user.username,
            first_name  = user.first_name,
            last_name   = user.last_name,
            email       = user.email,
            phoneNo     = user.phoneNo,
            sex         = user.sex,
            subcity     = user.subcity,
            woreda      = user.woreda,
            user_type   = user.user_type
        )


class CreateAdminAccount(graphene.Mutation):
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
    user_type   = 'Admin'
    #list the arguments
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

    #pass the arguments and save it to the models
    def mutate(self, info, username, password, email,last_name, 
        first_name,user_type,phoneNo, sex, subcity, woreda):

        user =  Account(
            username    = username,
            password    = password,
            email       = email,
            last_name   = last_name,
            first_name  = first_name,
            phoneNo     = phoneNo,
            sex         = sex,
            subcity     = subcity,
            woreda      = woreda,
            user_type   = user_type,
            is_admin    = True
        )
        user.set_password(password)
        user.save()
        if not user:
            raise Exception("Can not create admin!")
        return CreateAccount(
            id          = user.id,
            username    = user.username,
            first_name  = user.first_name,
            last_name   = user.last_name,
            email       = user.email,
            phoneNo     = user.phoneNo,
            sex         = user.sex,
            subcity     = user.subcity,
            woreda      = user.woreda,
            user_type   = user.user_type, 
            is_admin    = user.is_admin
        )
 

class ApproveBusinessAccount(graphene.Mutation):
    updatedBusiness = graphene.Field(BusinessownerType)
    class Arguments:
        business_id = graphene.String(required=True)
    def mutate(self,info,business_id):
        user = info.context.user
        if(user.user_type != "Admin"):
            raise Exception("Admins can only approve business accounts")
        businessToBeApproved = Businessowner.objects.get(owner_id = business_id)
        businessToBeApproved.is_valid_account = True
        businessToBeApproved.save()




#register the mutations

class Mutation(graphene.ObjectType):
    create_account = CreateAccount.Field()
    create_admin_account = CreateAdminAccount.Field()
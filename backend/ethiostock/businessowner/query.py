import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from django.db.models import Q
from account.models import Account
from businessowner.types import BusinessownerType
from businessowner.types import BusinessownerAccountUnionType

class Query(graphene.ObjectType):
    
    businessowner = graphene.List( BusinessownerType )
    myBusinessAccount = graphene.List(BusinessownerAccountUnionType)

    #create a resolver to return all the records
    def resolve_businessowner(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
        return  Businessowner.objects.all()
        
    #create a resolver to return user's profile
    def resolve_myBusinessAccount(self,info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not logged in!')
        elif(user.user_type == "Business Owner"):
            business = Businessowner.objects.get(account_id = user.id)
            
            return business
        else:
            raise Exception('Not authorized to get the businessowner account')

    
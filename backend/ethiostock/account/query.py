import graphene
from graphene_django import DjangoObjectType
from  account.models import  Account
from businessowner.models import Businessowner
from .types import AccountType
from businessowner.types import BusinessownerAccountUnionType

class Query(graphene.ObjectType):   
    accounts = graphene.List( AccountType ,first=graphene.Int(),skip=graphene.Int())
    getUserProfile = graphene.Field( AccountType )

    def resolve_accounts(self, info,first=None,skip=None ,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        account =   Account.objects.all()
        if skip:
            account = account[skip:]
        if first:
            account = account[:first]
        return account

    def resolve_getUserProfile(self,info):
        user = info.context.user
        if(user.is_anonymous):
            return None
        else:
            account = Account.objects.get(id = user.id)
            return account            
        
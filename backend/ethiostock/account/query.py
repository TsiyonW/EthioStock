import graphene
from graphene_django import DjangoObjectType

from  account.models import  Account
from .types import AccountType

class Query(graphene.ObjectType):   
    accounts = graphene.List( AccountType)
    def resolve_accounts(self, info, **kwargs):
        return  Account.objects.all()

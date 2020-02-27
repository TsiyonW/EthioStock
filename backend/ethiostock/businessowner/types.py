import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from account.types import AccountType


class BusinessownerType(DjangoObjectType):
    class Meta:
        model =  Businessowner
        
class BusinessownerAccountUnionType(graphene.Union):
    class Meta:
        types = (BusinessownerType, AccountType)

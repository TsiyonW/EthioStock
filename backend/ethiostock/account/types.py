import graphene
from graphene_django import DjangoObjectType
from  account.models import  Account

class  AccountType(DjangoObjectType):
    class Meta:
        model =  Account


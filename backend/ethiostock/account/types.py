import graphene
from graphene_django import DjangoObjectType
from  account.models import  Account

class  AccountType(DjangoObjectType):
    class Meta:
        model =  Account

class ErrorType(graphene.ObjectType):
    success = graphene.Boolean()
    message = graphene.String()

class FetchUserType(graphene.Union):
    class Meta:
        types = (ErrorType , AccountType)

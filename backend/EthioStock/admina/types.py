from  graphene import String, Boolean
from graphene_django import DjangoObjectType
from admina.models import  Admina


class AdminType(DjangoObjectType):
    message = String()
    success = Boolean()
    class Meta:
        model =  Admina
        

import graphene
from graphene_django import DjangoObjectType
from investor.models import Investor
from account.types import AccountType

class InvestorType(DjangoObjectType):
    class Meta:
        model = Investor
        

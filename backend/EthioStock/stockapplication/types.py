from graphene_django import DjangoObjectType
import graphene
from .models import StockApplication
class StockApplicationType(DjangoObjectType):
    class Meta:
        model = StockApplication
        
from graphene_django import DjangoObjectType
import graphene
from .models import Stock
class StockType(DjangoObjectType):
    class Meta:
        model = Stock
        
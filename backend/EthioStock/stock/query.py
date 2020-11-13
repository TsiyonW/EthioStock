import graphene
from graphene_django import DjangoObjectType
from stock.models import Stock
from stock.types import StockType
from django.db.models import Q
from businessowner.models import Businessowner
from django.utils import timezone

class Query(graphene.ObjectType):
    myStock = graphene.List(StockType)
    stockByBusiness = graphene.List(StockType) or graphene.Field(StockType)
    stockByClosingDate = graphene.List(StockType)
    stockOpenToday = graphene.List(StockType)
    allStock = graphene.List(StockType)
    getStockById = graphene.Field(StockType, stock_id = graphene.String())

    def resolve_myStock(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Authorized")
        owner = Businessowner.objects.get(account_id = user.id)
        return Stock.objects.filter(owner = owner)
    def resolve_getStockById(self,info,stock_id):
        user = info.context.user
        
        if(user.is_anonymous):
            raise Exception("Not Authorized")
        
        return Stock.objects.get(id = stock_id)
        
    def resolve_stockByBusiness(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Authorized") 
        businessOwner =Businessowner.objects.get(id = kwargs['id'])
        return Stock.objects.filter(owner = businessOwner)

    def resolve_stockByClosingDate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Authorized") 
        closingDate =kwargs['closingDate'] if "closingDate" in kwargs else  timezone.now().today()
        
        return Stock.objects.filter(closingDate = closingDate)

    def resolve_stockOpenToday(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Authorized")  
        today = timezone.datetime.today()
        openingDate = kwargs['openingDate'] if "openingDate" in kwargs else today
        return Stock.objects.filter(openingDate = openingDate)

    def resolve_allStock(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Authorized")
        return Stock.objects.all()

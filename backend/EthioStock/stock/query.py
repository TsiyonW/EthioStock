import graphene
from graphene_django import DjangoObjectType
from stock.models import Stock
from stock.types import StockType
from django.db.models import Q
from businessowner.models import Businessowner
from django.utils import timezone

class Query(graphene.ObjectType):
    myStock = graphene.List(StockType, first=graphene.Int(), skip = graphene.Int())
    stockByBusiness = graphene.List(StockType, first=graphene.Int(), skip = graphene.Int())
    stockByClosingDate = graphene.List(StockType, first=graphene.Int(), skip = graphene.Int())
    stockOpenToday = graphene.List(StockType, first=graphene.Int(), skip = graphene.Int())
    allStock = graphene.List(StockType, first=graphene.Int(), skip = graphene.Int())
    getStockById = graphene.Field(StockType, stock_id = graphene.String())
    searchStock = graphene.List(StockType, search = graphene.String(), first=graphene.Int(), skip = graphene.Int())

    def resolve_myStock(self, info,skip=None, first=None,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        owner = Businessowner.objects.get(account_id = user.id)
        stock = Stock.objects.filter(owner = owner)
        
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]
        return stock

    def resolve_getStockById(self,info,stock_id):
        user = info.context.user
        stock_idInt = int(stock_id)
        if(user.is_anonymous):
            return None
        
        return Stock.objects.get(id = stock_idInt)
        
    def resolve_stockByBusiness(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        businessOwner =Businessowner.objects.get(id = kwargs['id'])
        stock = Stock.objects.filter(owner = businessOwner)
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]

        return stock

    def resolve_stockByClosingDate(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        closingDate =kwargs['closingDate'] if "closingDate" in kwargs else  timezone.now().today()
        
        stock =  Stock.objects.filter(closingDate = closingDate)
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]

        return stock

    def resolve_stockOpenToday(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        today = timezone.datetime.today()
        openingDate = kwargs['openingDate'] if "openingDate" in kwargs else today
        stock =  Stock.objects.filter(openingDate = openingDate)
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]

        return stock

    def resolve_allStock(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        stock = Stock.objects.all()
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]

        return stock

    def resolve_searchStock(self, info,search=None ,first = None, skip=None,**kwargs):
        stock = Stock.objects.all()
        if(search):
            #search by id
            if(search.isnumeric()):
                filter = (
                    Q(id=search)|
                    Q(owner_id = search)
                )
            else:
                filter = (
                    Q(owner__business__icontains = search) |
                    Q(owner__account__username__icontains = search) |
                    Q(owner__account__email__icontains = search)
    
                ) 
            stock = stock.filter(filter)
        if skip:
            stock = stock[skip:]
        if first:
            stock = stock[:first]
        return stock
    
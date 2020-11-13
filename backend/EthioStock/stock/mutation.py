import graphene
from  graphene_django import DjangoObjectType
from .types import StockType
from account.types import AccountType
from businessowner.models import Businessowner
from businessowner.types import BusinessownerType
from .models import Stock
class CreateStock(graphene.Mutation):
    id = graphene.Int()
    price = graphene.Decimal()
    noOfStock = graphene.Int()
    openingDate = graphene.DateTime()
    closingDate = graphene.DateTime()
    description =graphene.String()
    approved = graphene.Boolean()
    closed = graphene.Boolean()
    sells  = graphene.Int()
    buys = graphene.Int()
    owner = graphene.Field(BusinessownerType)
    minAmountOfStockToBuy = graphene.Int()
    class Arguments:
        price = graphene.Decimal(required = True)
        noOfStock = graphene.Int(required = True)
        openingDate = graphene.DateTime(required = True)
        closingDate = graphene.DateTime(required = True)
        description =graphene.String(required = True)
        minAmountOfStockToBuy = graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        owner = Businessowner.objects.get(account_id = info.context.user.id) 

        stock = Stock(
            price = kwargs['price'],
            noOfStock = kwargs['noOfStock'],
            openingDate = kwargs['openingDate'],
            closingDate = kwargs['closingDate'],
            description = kwargs['description'],
            minAmountOfStockToBuy = kwargs['minAmountOfStockToBuy'],
            owner = owner
        )
        stock.save()

        return Stock(
            id = stock.id,
            price = stock.price,
            noOfStock = stock.noOfStock,
            openingDate = stock.openingDate,
            closingDate = stock.closingDate,
            description = stock.description,
            approved = stock.approved,
            closed = stock.closed,
            sells = stock.sells,
            buys = stock.buys,
            owner = stock.owner,
            minAmountOfStockToBuy = stock.minAmountOfStockToBuy
        )
class UpdateStock(graphene.Mutation):
    id = graphene.Int()
    price = graphene.Decimal()
    noOfStock = graphene.Int()
    openingDate = graphene.DateTime()
    closingDate = graphene.DateTime()
    description =graphene.String()
    approved = graphene.Boolean()
    closed = graphene.Boolean()
    sells  = graphene.Int()
    buys = graphene.Int()
    owner = graphene.Field(BusinessownerType)
    class Arguments:
        id = graphene.Int(required=True)
        price = graphene.Decimal()
        noOfStock = graphene.Int()
        openingDate = graphene.DateTime()
        closingDate = graphene.DateTime()
        description =graphene.String()
        approved = graphene.Boolean()
        closed = graphene.Boolean()
        sells  = graphene.Int()
        buys = graphene.Int()
    def mutate(self,info,**kwargs):
        user  = Businessowner.objects.get(account_id = info.context.user.id) 
        id = kwargs['id']
        stock   = Stock.objects.get(id = id)
        if(user.id != stock.owner.id):
            raise Exception("only the owner can change stock")
        stock.price          = kwargs['price'] if "price" in kwargs else stock.price
        stock.noOfStock     = kwargs['noOfStock'] if "noOfStock" in kwargs else stock.noOfStock
        stock.openingDate= kwargs['openingDate'] if "openingDate" in kwargs else stock.openingDate
        stock.closingDate= kwargs['closingDate'] if "closingDate" in kwargs else stock.closingDate
        stock.description= kwargs['description'] if "description" in kwargs else stock.description
        stock.approved= kwargs['approved'] if "approved" in kwargs else stock.approved
        stock.approved= kwargs['closed'] if "closed" in kwargs else stock.closed
        stock.sells= kwargs['sells'] if "sells" in kwargs else stock.sells
        stock.buys= kwargs['buys'] if "buys" in kwargs else stock.buys
        
        stock.save()
        return Stock(

            id = stock.id,
            price = stock.price,
            noOfStock = stock.noOfStock,
            openingDate = stock.openingDate,
            closingDate = stock.closingDate,
            description = stock.description,
            approved = stock.approved,
            closed = stock.closed,
            sells = stock.sells,
            buys = stock.buys,
            owner = user
        )

class Mutation(graphene.ObjectType):
    create_stock = CreateStock.Field()
    update_stock = UpdateStock.Field()
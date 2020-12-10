import graphene
from  graphene_django import DjangoObjectType
from .types import StockType
from account.types import AccountType
from businessowner.models import Businessowner
from account.models import Account
from businessowner.types import BusinessownerType
from .models import Stock
class CreateStock(graphene.Mutation):
    id = graphene.Int()
    stockCreated = graphene.Field(StockType)
    success = graphene.Boolean()
    message = graphene.String()
    class Arguments:
        price = graphene.Decimal(required = True)
        noOfStock = graphene.Int(required = True)
        openingDate = graphene.DateTime(required = True)
        closingDate = graphene.DateTime(required = True)
        description =graphene.String(required = True)
        minAmountOfStockToBuy = graphene.Int(required = True)
        serviceChargePercentage = graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        user = info.context.user   
        print(user)
        if(user.is_anonymous):
            return CreateStock(
                message="You must login to create a stock!",
                success = False
            )
        if(user.user_type!="Businessowner"):
            return CreateStock(
                message="Admins or Investors cant create stock!",
                success = False
            )
        if(user.user_type == "Businessowner"):
           
            businessowner = Businessowner.objects.get(account_id = user.id)
            #if the user is not approved dont let them create a stock
            if(businessowner.is_valid_account!="AP"):
                return CreateStock(
                    message="Your account has not been approved!!",
                    success = False
                )
        owner = Account.objects.get(id = user.id)
        #check if the owner has a stock in progress
        initiatedStock =  Stock.objects.filter(owner_id = owner.id).exists()
        if(initiatedStock):
            stocks = Stock.objects.filter(owner_id = owner.id)
            if(len(stocks)>1):
                for stock in stocks:
                    if not stock.closed:
                        return CreateStock(
                            message="You have a stock that is not closed please edit or close before creating.",
                            success=False
                        )


        stock = Stock(
            price = kwargs['price'],
            noOfStock = kwargs['noOfStock'],
            openingDate = kwargs['openingDate'],
            closingDate = kwargs['closingDate'],
            description = kwargs['description'],
            serviceChargePercentage = kwargs['serviceChargePercentage'],
            minAmountOfStockToBuy = kwargs['minAmountOfStockToBuy'],
            owner = owner
        )
        stock.save()

        return CreateStock(
            id = stock.id,
            stockCreated = stock,
            success = True,
            message = "Stock Created Successfully!"
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
    serviceChargePercentage = graphene.Int()
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
        serviceChargePercentage = graphene.Int()
    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return UpdateStock(
                message="You must login to create a stock!",
                success = False
            )
        user  = Investor.objects.get(account_id = user.id) 
        id = kwargs['id']
        try:
            stock   = Stock.objects.get(id = id)
        except:
           return UpdateStock(
                message="Stock not found!",
                success = False
            )
        
        if(user.id != stock.owner.id):
            return UpdateStock(
                message="only the owner can change stock!",
                success = False
            )
        stock.price          = kwargs['price'] if "price" in kwargs else stock.price
        stock.noOfStock     = kwargs['noOfStock'] if "noOfStock" in kwargs else stock.noOfStock
        stock.openingDate= kwargs['openingDate'] if "openingDate" in kwargs else stock.openingDate
        stock.closingDate= kwargs['closingDate'] if "closingDate" in kwargs else stock.closingDate
        stock.description= kwargs['description'] if "description" in kwargs else stock.description
        stock.closed= kwargs['closed'] if "closed" in kwargs else stock.closed
        stock.sells= kwargs['sells'] if "sells" in kwargs else stock.sells
        stock.buys= kwargs['buys'] if "buys" in kwargs else stock.buys
        stock.serviceChargePercentage = kwargs['serviceChargePercentage']if 'serviceChargePercentage' in kwargs else stock.serviceChargePercentage
        
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
            owner = user, 
            serviceChargePercentage = stock.serviceChargePercentage,
            success = True,
            message = "Stock Updated Successfully"
        )
class RemoveStock(graphene.Mutation):
    success = graphene.Boolean()
    message = graphene.String()
    class Arguments:
        stock_id = graphene.Int(required = True)
    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return RemoveStock(
                message="Login first!",
                success = False
            )
        stock_id = kwargs['stock_id']
        try:
            Stock.objects.get(id = stock_id).delete()
            return RemoveStock(
                message="Stock deleted", 
                success = True
            )
        except:
            return RemoveStock(
                message="Can't delete Stock", 
                success = False
            )

           
class Mutation(graphene.ObjectType):
    create_stock = CreateStock.Field()
    update_stock = UpdateStock.Field()
    remove_stock = RemoveStock.Field()
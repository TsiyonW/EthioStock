import graphene
from  graphene_django import DjangoObjectType
from account.types import AccountType
from businessowner.models import Businessowner
from account.models import Account
from .types import StockApplicationType
from .models import StockApplication
from stock.models import Stock

class ApplyForStock(graphene.Mutation):
    id = graphene.Int()
    success = graphene.Boolean()
    message = graphene.String()
    application = graphene.Field(StockApplicationType)
    class Arguments:
        stock_id = graphene.Int(required = True)
    def mutate(self, info, stock_id):
        user = info.context.user   
        print(user)
        if(user.is_anonymous):
            return ApplyForStock(
                message="You must login to apply for a stock!",
                success = False
            )
        if(user.user_type!="Investor"):
            return ApplyForStock(
                message="Admins or Businessowners cant apply for a stock!",
                success = False
            )
        
        applier = Account.objects.get(id = user.id)
        print("applieerid",applier.id)
        #check if the owner has a stock in progress
        stockAppExists =  StockApplication.objects.filter(applier_id = applier.id, stock_id = stock_id).exists()
        if(stockAppExists):
            return ApplyForStock(
                success = False,
                message  = "Application send already"
            )
        stockExists = Stock.objects.filter(id = stock_id).exists()
        if(not stockExists):
            return ApplyForStock(
                message="stock not found", 
                success = False
            )
        stock = Stock.objects.get(id = stock_id)
        stockApplication = StockApplication(
            applier = applier,
            stock = stock
        )
        stockApplication.save()

        return ApplyForStock(
            application = stockApplication,
            success = True,
            message = "Stock Created Successfully!"
        )

           
class Mutation(graphene.ObjectType):
    apply_stock = ApplyForStock.Field()
   
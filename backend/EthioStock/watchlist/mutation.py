import graphene
from .models import Watchlist
from .types import WatchlistType
from account.types import AccountType
from account.models import Account
from stock.models import Stock
from stock.types import StockType
from django.db.models import Q

class AddWatchlist(graphene.Mutation):
    id = graphene.Int()
    watchlistAdded = graphene.Field(WatchlistType)
    success = graphene.Boolean()
    message = graphene.String()
    class Arguments:
        stock_id = graphene.Int()
    def mutate(self,info,**kwargs):
        user = info.context.user
        
        if(user.is_anonymous):
            return AddWatchlist(
                success = False,
                message = "Not Logged in!"
            )

        account = Account.objects.get(id = user.id)
        stock_id = kwargs['stock_id']
        # if(user.user_type != 'Investor'):
        #     raise Exception("Only Investors can have a watchlist")
        stockExists = Stock.objects.filter(id = stock_id).exists()
        if(not stockExists):
            return AddWatchlist(
                success =False,
                message = "Stock not found"
            )
        stock = Stock.objects.get(id = stock_id)
        if(stock.owner.id == user.id):
            return AddWatchlist(
                success = False,
                message = "Can not add your own stock to watch list"
            )

        ##check if a watchlist exists
        previousRecord =  Watchlist.objects.filter(stock_id=stock_id ,account_id=user.id).exists()
        if(previousRecord):
            return AddWatchlist(
                success = False,
                message = "The stock is already in your watchlist!"
            )
        
       
        watchlist = Watchlist(
            account = account,
            stock = stock
        )
        watchlist.save()

        return AddWatchlist(
            id = watchlist.id,
            watchlistAdded = watchlist,
            success = True,
            message = "Watchlist added Successfully!"
        )

class RemoveWatchlist(graphene.Mutation):
    success = graphene.Boolean()
    message = graphene.String()
    class Arguments:
        stock_id = graphene.Int(required = True)
    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return RemoveWatchlist(
                success = False,
                message = "Not Logged in!"
            )
        stock_id = kwargs['stock_id']
        watchlistExists = Watchlist.objects.filter(stock_id = stock_id, account_id = user.id).exists()
        if(not watchlistExists):
            return RemoveWatchlist(
                success = False,
                message = "Watchlist Not Found!"
            )
        Watchlist.objects.get(stock_id = stock_id,account_id = user.id).delete()

        return RemoveWatchlist(
            success = True,
            message = "Stock Removed From Watchlist"
        )
           


class Mutation(graphene.ObjectType):
    add_watchlist  = AddWatchlist.Field()
    remove_watchlist = RemoveWatchlist.Field()   
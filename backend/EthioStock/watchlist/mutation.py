import graphene
from .models import Watchlist
from .types import WatchlistType
from account.types import AccountType
from account.models import Account
from businessowner.types import BusinessownerType
from businessowner.models import Businessowner

class AddWatchlist(graphene.Mutation):
    id = graphene.Int()
    owner = graphene.Field(AccountType)
    business = graphene.Field(BusinessownerType)
    
    class Arguments:
        id = graphene.Int()
    def mutate(self,info,**kwargs):
        user = info.context.user
        account = Account.objects.get(id = user.id)
        
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        # if(user.user_type != 'Investor'):
        #     raise Exception("Only Investors can have a watchlist")

        business = Businessowner.objects.get(id = kwargs['id'])
        watchlist = Watchlist(
            owner = account,
            business = business
        )
        watchlist.save()

        return Watchlist(
            id = watchlist.id,
            owner = watchlist.owner,
            business = watchlist.business
        )

class RemoveWatchlist(graphene.Mutation):
    id = graphene.Int()
    class Arguments:
        id = graphene.Int(required = True)
    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        
        removedWatchlist = Watchlist.objects.get(id = id).delete()
        removedWatchlist.save()

        return Watchlist(
            owner = removedWatchlist.owner,
            business = removedWatchlist.business
        )

class Mutation(graphene.ObjectType):
    add_watchlist  = AddWatchlist.Field()
    remove_watchlist = RemoveWatchlist.Field()   
import graphene 
from .models import Watchlist
from .types import WatchlistType
from account.models import Account
class Query(graphene.ObjectType):
    myWatchlist =graphene.List(WatchlistType)

    def resolve_myWatchlist(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        account = Account.objects.get(id = user.id)
        return Watchlist.objects.get(owner = account.id)

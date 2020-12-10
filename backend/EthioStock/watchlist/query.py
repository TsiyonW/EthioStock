import graphene 
from .models import Watchlist
from .types import WatchlistType
from account.models import Account
class Query(graphene.ObjectType):
    myWatchlist =graphene.List(WatchlistType)

    def resolve_myWatchlist(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        account = Account.objects.get(id = user.id)
        return Watchlist.objects.filter(account_id = account.id)

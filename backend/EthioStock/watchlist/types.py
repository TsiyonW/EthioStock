import graphene
from graphene_django import DjangoObjectType
from .models import Watchlist

class WatchlistType(DjangoObjectType):
    class Meta:
        model = Watchlist

import graphene 
from graphene_django import DjangoObjectType
from businessowner.models import Businessowner
from investor.models import Investor
from .models import Follower
from .types import FollowerType
from graphql import GraphQLError

class Query(graphene.ObjectType):
    myFollowers = graphene.List(FollowerType, first=graphene.Int(), skip = graphene.Int())
    businessesIFollow =  graphene.List(FollowerType, first=graphene.Int(), skip = graphene.Int())

    def resolve_myFollowers(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        id = Businessowner.objects.get(account_id = user.id)
        follower =  Follower.objects.filter(business_id = id)
        if skip:
            follower = follower[skip:]
        if first:
            follower = follower[:first]
        return follower
        
    def resolve_businessesIFollow(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        id = Investor.objects.get(account_id = user.id)
        follower =  Follower.objects.filter(investor_id = id)
        if skip:
            follower = follower[skip:]
        if first:
            follower = follower[:first]
        return follower


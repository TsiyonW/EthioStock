import graphene 
from graphene_django import DjangoObjectType
from businessowner.models import Businessowner
from investor.models import Investor
from .models import Follower
from .types import FollowerType

class Query(graphene.ObjectType):
    myFollowers = graphene.List(FollowerType)
    businessesIFollow = graphene.List(FollowerType)

    def resolve_myFollowers(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        id = Businessowner.objects.get(account_id = user.id)
        return Follower.objects.get(businessId = id)

    def resolve_businessesIFollow(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        id = Investor.objects.get(account_id = user.id)
        return Follower.objects.get(investorId = id)


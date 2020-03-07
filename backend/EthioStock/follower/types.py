from graphene_django import DjangoObjectType
from .models import Follower

class FollowerType(DjangoObjectType):
    class Meta:
        model = Follower
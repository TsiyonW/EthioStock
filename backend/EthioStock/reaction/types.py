import graphene
from graphene_django import DjangoObjectType
from reaction.models import Reaction

class ReactionType(DjangoObjectType):
    class Meta:
        model = Reaction
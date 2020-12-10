from graphene_django import DjangoObjectType
import graphene
from .models import Comment

class CommentType(DjangoObjectType):
    class Meta:
        model = Comment
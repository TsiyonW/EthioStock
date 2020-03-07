from graphene_django import DjangoObjectType
import graphene
from .models import Post

class PostType(DjangoObjectType):
    class Meta:
        model = Post

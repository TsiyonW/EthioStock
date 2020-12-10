import graphene
from graphene_django import DjangoObjectType
from .models import UserReport

class UserReportType(DjangoObjectType):
    class Meta:
        model = UserReport
        
class CountType(graphene.ObjectType):
    count = graphene.Int()
    def resolve_count(parent,info):
        return parent.count
import graphene
from graphene_django import DjangoObjectType
from .models import UserReport

class UserReportType(DjangoObjectType):
    class Meta:
        model = UserReport
import graphene
from .models import UserReport
from .types import UserReportType

class Query(graphene.ObjectType):
    getReportById = graphene.Field(UserReportType)
    getReportByDate = graphene.List(UserReportType)
    getReportByBusiness = graphene.List(UserReportType)
    getReportByInvestor = graphene.List(UserReportType)
    getReportCount = graphene.List(UserReportType)

    def resolve_getReportById(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')

    def resolve_getReportByDate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')

    def resolve_getReportByBusiness(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')

    def resolve_getReportByInvestor(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')

    def resolve_getReportCount(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
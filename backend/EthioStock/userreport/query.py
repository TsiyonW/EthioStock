import graphene
from .models import UserReport
from .types import UserReportType
from .types import CountType

class Query(graphene.ObjectType):
    getReportById = graphene.Field(UserReportType, report_id = graphene.Int())
    getReportByDate = graphene.List(UserReportType)
    getReportByUserId = graphene.Field(UserReportType)
    getReportCount = graphene.Field(CountType, user_id = graphene.Int())
    getAllReports = graphene.List(UserReportType)

    def resolve_getAllReports(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous or user.user_type!="Admin"  ):
            return None
        else:
            return UserReport.objects.all()

    def resolve_getReportById(self, info,report_id, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(UserReport.objects.filter(id = report_id).exists()):
            return UserReport.objects.get(id = report_id)
        else:
            return None


    def resolve_getReportByDate(self, info, report_date, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(UserReport.objects.filter(report_date = report_date).exists()):
            return UserReport.objects.get(report_date = report_date)
        else:
            return None

    def resolve_getReportByUserId(self, info,account_id, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(UserReport.objects.filter(reported_user = account_id).exists()):
            return UserReport.objects.get(reported_user = account_id)
        else:
            return None      


    def resolve_getReportCount(self, info,user_id, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(UserReport.objects.filter(reported_user = user_id).exists()):
            reportCount = UserReport.objects.filter(reported_user = user_id).count()
            return CountType(count = reportCount)
        else:
            return None


import graphene
from .models import UserReport
from .types import UserReportType
from account.models import Account
from account.types import AccountType

class ReportUser(graphene.Mutation):
    userReport = graphene.Field(UserReportType)

    class Arguments:
        reportedUser = graphene.Field(AccountType)
        reason = graphene.String()

    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        reportedUserId = kwargs['reportedUserId']
        reason = kwargs['reason']
        reportedBy = Account.objects.get(id = user.id)
        reportedUser = Account.objects.get(id = reportedUserId)
        
        userReport = UserReport(
            reason = reason,
            reportedUser = reportedUser,
            reportedBy = reportedBy
        )
        userReport.save()
        
        return UserReport(
            userReport = userReport
        )

        
import graphene
from .models import UserReport
from .types import UserReportType
from account.models import Account
from account.types import AccountType
from django.core.mail import send_mail
from django.conf import settings

class SendWarningEmail(graphene.Mutation):
    success = graphene.Boolean()
    message = graphene.String()

    class Arguments:
        subject = graphene.String()
        send_to = graphene.String()
        message = graphene.String()
    def mutate(self, info, subject, send_to, message):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        if(user.user_type !='Admin'):
            return SendWarningEmail(
                success = False,
                message = "Admins can only send Warning messages"
            )   
        reportedUserAccountExists = Account.objects.filter(email = send_to).exists()
        if(reportedUserAccountExists):
            account = Account.objects.get(email = send_to)
            userReport = UserReport.objects.filter(reported_user_id = account.id)   
            if(userReport.count()==0):
                return SendWarningEmail(
                    success = False,
                    message = "User Not reported!"
                )
            if(userReport.count()<5):
                return SendWarningEmail(
                    success = False,
                    message = "Few reports to send warning"
                )
        
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [send_to,]
            send_mail( subject, message, email_from, recipient_list )
            return SendWarningEmail(
                success = True,
                message = "Warning email sent to "+str(send_to)
            )
        else:
            return SendWarningEmail(
                success = False,
                message = "User Not Found!!"
            )

class ReportUser(graphene.Mutation):
    user_report = graphene.Field(UserReportType)
    success = graphene.Boolean()
    message = graphene.String()

    class Arguments:
        reportedUserId = graphene.Int()
        reason = graphene.String()

    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        
        reportedUserId = kwargs['reportedUserId']
        reason = kwargs['reason']
        reportedUserExists=  Account.objects.filter(id = reportedUserId).exists()
        reporterAccountExists =  Account.objects.filter(id = user.id).exists()
        if(not reportedUserExists):
            return ReportUser(
                success = False,
                message = "Reported User Does't exist"
            )
        if(not reporterAccountExists):
            return ReportUser(
                success = False,
                message = "Account doesn't exist"
            )

        reportedBy = Account.objects.get(id = user.id)
        reportedUser = Account.objects.get(id = reportedUserId)
        reportExists = UserReport.objects.filter(reported_by = reportedBy, reported_user = reportedUser).exists()
        if(reportExists):
            return ReportUser(
                message = "You reported user already",
                success = False
            )
        report = UserReport(
            reason = reason,
            reported_user = reportedUser,
            reported_by = reportedBy
        )
        report.save()


        return ReportUser(
            user_report = report,
            success = True,
            message = "User Reported"
        )

class Mutation(graphene.ObjectType):
    report_user = ReportUser.Field()
    send_warning_email = SendWarningEmail.Field()

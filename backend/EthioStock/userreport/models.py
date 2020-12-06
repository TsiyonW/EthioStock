from django.db import models
from investor.models import Investor
from account.models import Account
from django.utils.translation import gettext_lazy as _

class UserReport(models.Model):
    class ReportStatus(models.TextChoices):
        
        WARNINGSENT = 'WS', _('Warning Sent')
        PENDINGRESOLVE = 'PR', _('Pending Resolve')

    reported_by = models.ForeignKey(
        Account,
        related_name="reportedBy",
        on_delete = models.DO_NOTHING
    )
    reported_user = models.ForeignKey(
        Account,
        related_name="reportedUser",
        on_delete = models.DO_NOTHING
    )
    reason = models.TextField()
    report_date = models.DateTimeField(auto_now_add=True)
    report_status = models.CharField(
        max_length = 2,
        choices = ReportStatus.choices,
        default = ReportStatus.PENDINGRESOLVE
    )
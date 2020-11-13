from django.db import models
from investor.models import Investor
from account.models import Account

class UserReport(models.Model):
    reportedBy = models.ForeignKey(
        Investor,
        on_delete = models.DO_NOTHING
    )
    reportedUser = models.ForeignKey(
        Account,
        on_delete = models.DO_NOTHING
    )
    reason = models.TextField()
    reportDate = models.DateTimeField(auto_now_add=True)
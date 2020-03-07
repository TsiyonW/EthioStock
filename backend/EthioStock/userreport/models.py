from django.db import models
from investor.models import Investor

class UserReport(models.Model):
    reportedBy = models.ForeignKey(
        Investor,
        related_name='reportedByUserId',
        on_delete = models.DO_NOTHING
    )
    reportedUserId = models.ForeignKey(
        Investor,
        related_name='reportedUserId',
        on_delete = models.DO_NOTHING
    )
    reason = models.TextField()
    reportCount = models.IntegerField()
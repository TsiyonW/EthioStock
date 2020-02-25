from django.db import models
from investor.models import InvestorModel

class UserReportModel(models.Model):
    reportedBy = models.ForeignKey(
        InvestorModel,
        related_name="investorId", 
        on_delete = models.DO_NOTHING
    )
    reportedUserId = models.ForeignKey(
        InvestorModel,
        related_name="investorId", 
        on_delete = models.DO_NOTHING
    )
    reason = models.TextField()
    reportCount = models.IntegerField()
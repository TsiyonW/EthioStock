from django.db import models
from businessowner.models import BusinessOwnerModel
from investor.models import InvestorModel

class FollowerModel(models.Model):
    businessId = models.ForeignKey(
        BusinessOwnerModel,
        related_name="businessOwnerId",
        on_delete=models.CASCADE
    )
    investorId = models.ForeignKey(
        InvestorModel,
        related_name="investorId",
        on_delete=models.CASCADE
    )
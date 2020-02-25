from django.db import models
from businessowner.models import BusinessOwnerModel
from investor.models import InvestorModel

class WatchlistModel(models.Model):
    ownerId = models.ForeignKey(
        InvestorModel,
        related_name="investorId", 
        on_delete = models.DO_NOTHING
    )
    businessId = models.ForeignKey(
        BusinessOwnerModel,
        related_name="businessOwnerId", 
        on_delete = models.DO_NOTHING
    )

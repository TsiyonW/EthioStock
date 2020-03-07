from django.db import models
from investor.models import Investor
from businessowner.models import Businessowner

class Watchlist(models.Model):
    ownerId = models.ForeignKey(
        Investor,
        on_delete = models.DO_NOTHING
    )
    businessId = models.ForeignKey(
        Businessowner, 
        on_delete = models.DO_NOTHING
    )

from django.db import models
from businessowner.models import Businessowner
from investor.models import Investor

class Follower(models.Model):
    businessId = models.ForeignKey(
        Businessowner,
        on_delete=models.CASCADE
    )
    investorId = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE
    )
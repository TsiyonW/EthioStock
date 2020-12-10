from django.db import models
from businessowner.models import Businessowner
from investor.models import Investor

class Follower(models.Model):
    business = models.ForeignKey(
        Businessowner,
        on_delete=models.CASCADE
    )
    investor = models.ForeignKey(
        Investor,
        on_delete=models.CASCADE
    )
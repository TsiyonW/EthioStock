from django.db import models
from investor.models import InvestorModel

class Reaction(models.Model):
    postId = id
    investorId = models.ForeignKey(
        InvestorModel,
        related_name="investorId", 
        on_delete = models.DO_NOTHING
    )
    isLike = models.BooleanField()
    comment = models.TextField()
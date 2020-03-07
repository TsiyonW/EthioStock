from django.db import models
from investor.models import Investor

class Reaction(models.Model):
    postId = id
    investorId = models.ForeignKey(
        Investor,
        on_delete = models.DO_NOTHING
    )
    isLike = models.BooleanField()
    comment = models.TextField()
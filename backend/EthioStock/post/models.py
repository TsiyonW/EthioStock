from django.db import models
from businessowner.models import BusinessOwnerModel

class PostModel(models.Model):
    postId = id
    ownerId = models.ForeignKey(
        BusinessOwnerModel,
        related_name="businessOwnerId",
        on_delete=models.DO_NOTHING
    )
    description =models.TextField()
    image = [models.ImageField()]
    date = models.DateTimeField()
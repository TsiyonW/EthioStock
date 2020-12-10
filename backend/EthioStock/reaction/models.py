from django.db import models

# Create your models here.
from django.db import models
from account.models import Account
from post.models import Post

class Reaction(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.DO_NOTHING

    )
    reactedby = models.ForeignKey(
        Account,
        on_delete = models.DO_NOTHING
    )
    isLike = models.BooleanField(default = False)
    isDislike = models.BooleanField(default = False)
    reactionTime = models.DateTimeField(auto_now_add=True)
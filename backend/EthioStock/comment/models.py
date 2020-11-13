from django.db import models
from investor.models import Investor
from post.models import Post

class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.DO_NOTHING

    )
    investor = models.ForeignKey(
        Investor,
        on_delete = models.DO_NOTHING
    )
    comment = models.TextField()
    commentedTime = models.DateTimeField(auto_now_add=True)
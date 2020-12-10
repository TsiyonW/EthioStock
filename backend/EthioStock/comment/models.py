from django.db import models
from account.models import Account
from post.models import Post

class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.DO_NOTHING

    )
    commentedBy = models.ForeignKey(
        Account,
        on_delete = models.DO_NOTHING
    )
    comment = models.TextField()
    commentedTime = models.DateTimeField(auto_now_add=True)
from django.db import models
from businessowner.models import Businessowner

class Post(models.Model):
    owner = models.ForeignKey(
        Businessowner,
        on_delete=models.DO_NOTHING
    )
    description =models.TextField()
    title = models.TextField()
    image = [models.ImageField()]
    date = models.DateTimeField(auto_now_add=True)
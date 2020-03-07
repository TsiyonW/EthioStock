from django.db import models
from account.models import Account

class Investor(models.Model):
    account = models.OneToOneField(
        Account, on_delete = models.CASCADE
    )
    nationality = models.CharField( max_length=20 ) 
    
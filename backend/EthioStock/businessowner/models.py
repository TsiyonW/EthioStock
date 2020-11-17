from django.db import models
from account.models import Account

class Businessowner(models.Model):
    business = models.TextField( max_length=40,blank=True)
    account = models.OneToOneField(
        Account, on_delete = models.CASCADE
    )
    website = models.URLField()
    category =  models.CharField( max_length=20,blank=True )
    is_valid_account = models.BooleanField(default = False)
    legality  = models.ImageField(null =True, blank=True, upload_to="userImages")

    

    
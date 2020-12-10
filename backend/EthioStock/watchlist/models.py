from django.db import models
from account.models import Account
from stock.models import Stock
from investor.models import Investor
# Create your models here.

class Watchlist(models.Model):
    account = models.ForeignKey(
        Account,
        on_delete = models.DO_NOTHING
    )
    stock = models.ForeignKey(
        Stock,
        on_delete=models.DO_NOTHING
    )
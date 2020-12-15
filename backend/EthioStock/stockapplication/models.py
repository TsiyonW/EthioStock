from django.db import models
from account.models import Account
from stock.models import Stock

class StockApplication(models.Model):

    applier = models.ForeignKey(
        Account,
        on_delete=models.CASCADE
    )
    stock = models.ForeignKey(
        Stock, 
        on_delete =models.CASCADE
    )
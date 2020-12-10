from django.db import models
from account.models import Account

class Stock(models.Model):
    price = models.DecimalField(decimal_places=2, max_digits=10)
    closingDate = models.DateField()
    openingDate = models.DateField()
    description = models.TextField()
    noOfStock = models.IntegerField()
    serviceChargePercentage = models.IntegerField()
    approved = models.BooleanField(default=False)
    closed = models.BooleanField(default=False)
    sells = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    buys = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    owner = models.ForeignKey(
        Account,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    minAmountOfStockToBuy = models.IntegerField(default=1)
from django.db import models
from businessowner.models import BusinessOwnerModel

class StockModel(models.Model):
    stockId = id
    ownerID = models.CharField()
    price = models.CharField()
    closingDate = models.DateField()
    openingDate = models.DateField()
    description = models.TextField()
    noOfStock = models.IntegerField()
    approved = models.BooleanField()
    sells = models.DecimalField()
    buys = models.DecimalField()
    ownerID = models.ForeignKey(
        BusinessOwnerModel,
        related_name="businessOwnerId",
        on_delete=models.CASCADE
    )
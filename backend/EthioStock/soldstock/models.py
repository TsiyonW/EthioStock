from django.db import models
from stock.models import StockModel
from investor.models import InvestorModel
from businessowner.models import BusinessOwnerModel

class SoldStockLedgerModel(models.Model):
    stockId  = models.ForeignKey(
        StockModel,
        related_name="businessOwnerId",
        on_delete=models.DO_NOTHING
    )
    investorId = models.ForeignKey(
        InvestorModel,
        related_name="businessOwnerId",
        on_delete=models.DO_NOTHING
    )
    totalPrice = models.DecimalField(decimal_places=2)
    numberOfStock = models.IntegerField()
    sellerId = models.ForeignKey(
        BusinessOwnerModel,
        related_name="businessOwnerId",
        on_delete=models.DO_NOTHING
    )
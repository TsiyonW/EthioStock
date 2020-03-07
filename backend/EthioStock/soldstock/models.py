from django.db import models
from stock.models import Stock
from investor.models import Investor
from businessowner.models import Businessowner

class SoldStockLedger(models.Model):
    stockId  = models.ForeignKey(
        Stock,
        on_delete=models.DO_NOTHING
    )
    investorId = models.ForeignKey(
        Investor,
        on_delete=models.DO_NOTHING
    )
    totalPrice = models.DecimalField(decimal_places=2, max_digits=10)
    numberOfStock = models.IntegerField()
    sellerId = models.ForeignKey(
        Businessowner,
        on_delete=models.DO_NOTHING
    )
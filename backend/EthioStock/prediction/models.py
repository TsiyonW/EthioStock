from django.db import models
from stock.models import Stock

class Prediction(models.Model):
    stockID = models.ForeignKey(
        Stock,
        on_delete=models.CASCADE
    )
    predictedPrice = models.DecimalField(decimal_places=2, max_digits=10)
    actualPrice = models.DecimalField(decimal_places=2, max_digits=10)
    predictionDate = models.DecimalField(decimal_places=2, max_digits=10)
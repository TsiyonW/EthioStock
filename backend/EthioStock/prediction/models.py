from django.db import models
from stock.models import StockModel

class PredictionModel(models.Model):
    stockID = models.ForeignKey(
        StockModel,
        related_name="stockId",
        on_delete=models.CASCADE
    )
    predictedPrice = models.DecimalField()
    actualPrice = models.DecimalField()
    predictionDate = models.DateField()
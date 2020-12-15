from django.db import models

# Create your models here.
class Prediction(models.Model):
    stock_type = models.TextField()
    trade_date = models.DateField()
    stock_price = models.FloatField()
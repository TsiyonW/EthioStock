from django.db import models

# Create your models here.
class Data(models.Model):
    stock_type = models.TextField()
    trade_date = models.DateField()
    symbol = models.TextField()
    warehouse = models.TextField()
    production_year = models.IntegerField()
    opening_price = models.TextField()
    closing_price = models.TextField()
    high = models.TextField()
    low = models.TextField()
    change = models.IntegerField()
    percentage_change = models.TextField()
    volume = models.FloatField()
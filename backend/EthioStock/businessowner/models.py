from django.db import models

class BusinessOwnerModel(models.Model):
    businessOwnerId = id
    name = models.CharField()
    ownerPhone  = models.CharField()
    password  = models.CharField()
    website  = models.CharField()
    category  = models.CharField()
    email  = models.CharField()
    subCity  = models.CharField()
    legality = models.CharField()
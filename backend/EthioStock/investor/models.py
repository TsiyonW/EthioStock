from django.db import models

class InvestorModel(models.Model):
    GENDER = (('F','Female'), ('M','Male'))
    investorId = models.AutoField(primary_key = True)
    username = models.CharField(unique=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    phoneNo = models.CharField()
    sex = models.CharField(choices = GENDER)
    email = models.CharField()
    subcity = models.CharField()
    woreda = models.CharField()
    password = models.CharField(max_length=20)
    nationality = models.CharField(max_length=20)
    registerDate = models.DateTimeField(auto_now_add=True)
import graphene
from graphene_django import DjangoObjectType
from datetime import date
from .models import Data
import datetime
from django.db.models import Q
import numpy as np

class DataType(DjangoObjectType):
    class Meta:
        model = Data


class Query(graphene.ObjectType):
    data = graphene.List(DataType)

    dataByType = graphene.List(DataType)
    weeklyData = graphene.List(DataType)
    monthlyData = graphene.List(DataType)
    dailyData = graphene.List(DataType)
    # dateToday = '2020-12-10'

    def resolve_dataByType(self, info, **kwargs):
        return Data.objects.filter(dataType == kwargs['dataType'] )

    def resolve_monthlyData(self, info, **kwargs): 
        allData = []
        for i in range(30,0,-1):
            dateMonthly = datetime.datetime.now() - datetime.timedelta(days=i)
            # print( dateMonthly.date())
            dayData = Data.objects.filter(trade_date = dateMonthly.date())
            allData.append(dayData)
        
        finalData = np.concatenate(allData)
        print(len(finalData))
        return finalData

    def resolve_weeklyData(self, info, **kwargs):  
        allData = []
        for i in range(7,0,-1):
            dateWeekly = datetime.datetime.now() - datetime.timedelta(days=i)
            # print( dateWeekly.date())
            dayData = Data.objects.filter(trade_date = dateWeekly.date())
            
            allData.append(dayData)

        finalData = np.concatenate(allData)
        return finalData
 

    def resolve_dailyData(self, info, **kwargs):
        return Data.objects.filter(trade_date = date(2020, 12, 10))


    def resolve_data(self, info, **kwargs):
        return Data.objects.all()

    
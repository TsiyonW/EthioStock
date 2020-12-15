import graphene
from graphene_django import DjangoObjectType
from datetime import date
from .models import Data
import datetime
from django.db.models import Q
import numpy as np

class CreateData(graphene.Mutation):
    id = graphene.Int()
    stock_type = graphene.String()
    trade_date = graphene.Date()
    symbol = graphene.String()
    warehouse = graphene.String()
    production_year = graphene.Int()
    opening_price = graphene.String()
    closing_price = graphene.String()
    high = graphene.String()
    low = graphene.String()
    change = graphene.Int()
    percentage_change = graphene.String()
    volume = graphene.Float()
    

    class Arguments:
        stock_type = graphene.String()
        trade_date = graphene.Date()
        symbol = graphene.String()
        warehouse = graphene.String()
        production_year = graphene.Int()
        opening_price = graphene.String()
        closing_price = graphene.String()
        high = graphene.String()
        low = graphene.String()
        change = graphene.Int()
        percentage_change = graphene.String()
        volume = graphene.Float()

    def mutate(self, info, stock_type, trade_date,symbol, warehouse, production_year, opening_price, closing_price, high, low, change, percentage_change,volume ):
        data = Data(stock_type=stock_type, trade_date=trade_date, symbol = symbol, warehouse= warehouse, production_year=production_year, opening_price=opening_price, closing_price = closing_price, high = high, low=low, change=change,percentage_change=percentage_change, volume= volume)
        data.save()

        return CreateData(
            id=data.id,
            stock_type = data.stock_type,
            trade_date = data.trade_date,
            symbol = data.symbol,
            warehouse = data.warehouse,
            production_year= data.production_year,
            opening_price = data.opening_price,
            closing_price = data.closing_price,
            high = data.high,
            low = data.low,
            change = data.change,
            percentage_change = data.volume,
            volume = data.volume
        )

class Mutation(graphene.ObjectType):
    create_data = CreateData.Field()
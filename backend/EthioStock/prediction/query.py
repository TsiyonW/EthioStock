import graphene
from graphene_django import DjangoObjectType
from .models import Prediction


class PredictionType(DjangoObjectType):
    class Meta:
        model = Prediction

    

class Query(graphene.ObjectType):
    prediction = graphene.List(PredictionType)

    def resolve_prediction(self, info, **kwargs):
        return Prediction.objects.all()
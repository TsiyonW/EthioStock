import graphene
from rx import Observable
from businessowner.types import BusinessownerType
from businessowner.models import Businessowner
from graphene_subscriptions.events import CREATED, UPDATED, DELETED

class Subscription(graphene.ObjectType):
    businessOwner_created = graphene.Field(BusinessownerType)
    print("got here btw")
    print("and the business is ", businessOwner_created)
    async def resolve_businessOwner_created(root,info):
        return root.filter(
            lambda event:
                event.operation == CREATED 
                and 
                isinstance(event.instance, Businessowner)
        ).map(lambda event: event.instance)

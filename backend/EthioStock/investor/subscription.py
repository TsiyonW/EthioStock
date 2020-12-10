import graphene
from rx import Observable
from investor.types import InvestorType
from investor.models import Investor
from graphene_subscriptions.events import CREATED, UPDATED, DELETED

class Subscription(graphene.ObjectType):
    investor_created = graphene.Field(InvestorType)
    investor_updated = graphene.Field(InvestorType, id = graphene.Int())
    hello = graphene.String()

    print("got here btw in investor")
    print("and the investor is CREATED is ", investor_created)
    print("and the investor is UPDATED is ", investor_updated)

    def resolve_hello(root, info):
        return Observable.interval(3000) \
                         .map(lambda i: "hello world!")
    async def resolve_investor_created(root,info):
        print("it returns investor type IN CREATE")
        return root.filter(
            lambda event:
                event.operation == CREATED and
                isinstance(event.instance, Investor)
        ).map(lambda event: event.instance)

    async def resolve_investor_updated(root,info, id):
        print("it returns investor type IN UPDATE")
        return root.filter(
            lambda event:
                event.operation == UPDATED 
                and 
                isinstance(event.instance, Investor) and
                event.instance.pk == id
        ).map(lambda event: event.instance)
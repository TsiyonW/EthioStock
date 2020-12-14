import graphene
from rx import Observable
from investor.types import InvestorType
from investor.models import Investor
from graphene_subscriptions.events import CREATED, UPDATED, DELETED

class Subscription(graphene.ObjectType):
    investor_created = graphene.Field(InvestorType)
    investor_updated = graphene.Field(InvestorType, id = graphene.Int())
    hello = graphene.String()
    print("here in investor subscription")

    def resolve_hello(root, info):
        print("USer ID", info.context.user)
        print("here hello")
        return Observable.interval(3000) \
                         .map(lambda i: "hello world!")
    def resolve_investor_created(root,info):
        print("User id",info.context.user.id)
        print("Listening Created: it returns investor type IN CREATE")
        return root.filter(
            lambda event:
                event.operation == CREATED and
                isinstance(event.instance, Investor)
        ).map(lambda event: event.instance)

    def resolve_investor_updated(root,info, id):
        # print(fjlkdfj)
        print("Listening Updated it returns investor type IN UPDATE")
        return root.filter(
            lambda event:
                event.operation == UPDATED 
                and 
                isinstance(event.instance, Investor) and
                event.instance.pk == id
        ).map(lambda event: event.instance)
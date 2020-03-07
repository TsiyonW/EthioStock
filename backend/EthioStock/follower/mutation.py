import graphene
from .models import Follower
from businessowner.types import BusinessownerType
from businessowner.models import Businessowner
from investor.types import InvestorType
from investor.models import Investor

class Follow(graphene.Mutation):
    id = graphene.Int()
    business = graphene.Field(BusinessownerType)
    investor = graphene.Field(InvestorType)

    class Arguments:
        businessId = graphene.Int(required = True)

    def mutate(self, info, businessId):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not logged in!")
        bussiness = Businessowner.objects.get(id = businessId)
        investor = Investor.objects.get(account_id = user.id)

        follower = Follower(
            businessId = bussiness,
            investorId = investor
        )
        follower.save()

        return Follow(
            id = follower.id,
            bussinessId = follower.businessId,
            investorId = follower.investorId
        )

class UnFollow(graphene.Mutation):
    id = graphene.Int()
    class Arguments:
        id = graphene.Int(required = True)
    def mutate(self, info, id):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not logged in!")
        removedFollowRecord = Follower.objects.get(id = id).delete()
        removedFollowRecord.save()
        return Follow(
            id = removedFollowRecord.id,
            businessId = removedFollowRecord.businessId,
            investorId = removedFollowRecord.investorId
        )



class Mutation(graphene.ObjectType):
    follow = Follow.Field()
    unfollow = UnFollow.Field()
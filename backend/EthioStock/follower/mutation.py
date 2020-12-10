import graphene
from .models import Follower
from .types import FollowerType
from businessowner.types import BusinessownerType
from businessowner.models import Businessowner
from investor.types import InvestorType
from investor.models import Investor

class Follow(graphene.Mutation):
    followed = graphene.Field(FollowerType)
    class Arguments:
        businessId = graphene.Int(required = True)

    def mutate(self, info, businessId):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not logged in!")
        if(user.user_type == 'Businessowner'):
            raise Exception("Only Investors can follow business")
     
        bussiness = Businessowner.objects.get(id = businessId)
        investor = Investor.objects.get(account_id = user.id)

        follower = Follower(
            business = bussiness,
            investor = investor
        )
        follower.save()

        return Follow(
            followed = follower
        )


class UnFollow(graphene.Mutation):
    unfollowSuccess = graphene.Boolean()
    class Arguments:
        followId = graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        followId = kwargs['followId']
        try:
            Follower.objects.get(id = followId).delete()
        except:
            raise Exception("Can not get follow record with id: "+str(followId)+ " .")

        

        return {"unfollowSuccess":True}



class Mutation(graphene.ObjectType):
    follow = Follow.Field()
    unfollow = UnFollow.Field()
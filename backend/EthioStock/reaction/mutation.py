import graphene
from graphene_django import DjangoObjectType
from investor.models import Investor
from investor.types  import InvestorType
from reaction.models import Reaction
from reaction.types import ReactionType
from post.types import PostType
from post.models import Post
from django.db.models import Q

class Like(graphene.Mutation):
    id = graphene.Int()
    post = graphene.Field(PostType)
    investor = graphene.Field(InvestorType)
    isLike = graphene.Boolean()
    class Arguments:
        postId = graphene.Int(required = True)

    def mutate(self,info,postId):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must Login First")
     
        postId = kwargs['id']
        post = Post.objects.all(id = postId)
        investor  = Investor.objects.all(account_id = user.id)
        reaction = Reaction.objects.filter(Q(investor = investor) & Q(post = post))
        if(reaction):
            reaction.isLike = True
            reaction.save()
            
        isLike = True

        reaction = Reaction(
            post = post, 
            investor = investor,
            isLike = isLike
        )
        reaction.save()

        return Like(
            id = reaction.id,
            post = reaction.post,
            investor = reaction.investor,
            isLike = reaction.isLike

        )

class DisLike(graphene.Mutation):
    reaction = graphene.Field(ReactionType)
    class Arguments:
        postId = graphene.Int()
    def mutate(self,info, postId):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must Login First")
        investor = Investor.objects.get(account_id = user.id)
        post = Post.objects.get(id = postId)
        reaction = Reaction.objects.filter(
            Q(investor = investor) & Q(post = post)
            )
        reaction.isLike = False
        reaction.save()

        return DisLike(
            reaction = reaction
        )

class Mutation(graphene.ObjectType):
    like = Like.Field()
    dislike = DisLike.Field()

import graphene
from graphene_django import DjangoObjectType
from reaction.models import Reaction
from reaction.types import ReactionType
from post.types import PostType
from post.models import Post
from account.models import Account
from django.db.models import Q

class Like(graphene.Mutation):
    reactionLiked = graphene.Field(ReactionType)
    class Arguments:
        postId = graphene.Int(required = True)

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must Login First")
     
        postId = kwargs['postId']
        post = Post.objects.get(id = postId)
        reactedBy  = Account.objects.get(id = user.id)
        reactionExists = Reaction.objects.filter(Q(reactedby = reactedBy) & Q(post = post)).exists()
        if(reactionExists):
            reactions = Reaction.objects.filter(Q(reactedby = reactedBy) & Q(post = post))
            for reaction in reactions:
                if(reaction.isLike):
                    reaction.isLike = False
                    reaction.save()
                else:
                    reaction.isLike = True
                    reaction.isDislike = False
                    reaction.save()
        
        else:
            reaction = Reaction(
                post = post, 
                reactedby = reactedBy,
                isLike = True,
                isDislike = False
            )
            reaction.save()

        return Like(
            reactionLiked = reaction
        )

class Dislike(graphene.Mutation):
    reactionDisliked = graphene.Field(ReactionType)
    class Arguments:
        postId = graphene.Int(required = True)

    def mutate(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Must Login First")
        print("here we are")
        postId = kwargs['postId']
        post = Post.objects.get(id = postId)
        reactedBy  = Account.objects.get(id = user.id)
        reactionExists = Reaction.objects.filter(Q(reactedby = reactedBy) & Q(post = post)).exists()
        #if reacted previously toggle
        if(reactionExists):
            reactions = Reaction.objects.filter(Q(reactedby = reactedBy) & Q(post = post))
            for reaction in reactions:
                if(reaction.isDislike):
                    reaction.isDislike = False
                    reaction.save()
                else:
                
                    reaction.isDislike = True
                    reaction.isLike = False
                    reaction.save()
        else:
            reaction = Reaction(
                post = post, 
                reactedby = reactedBy,
                isLike = False,
                isDislike = True
            )
            reaction.save()

        return Dislike(
            reactionDisliked = reaction
        )


class Mutation(graphene.ObjectType):
    like = Like.Field()
    dislike = Dislike.Field()

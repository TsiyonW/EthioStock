import graphene 
from .models import Comment
from .types import CommentType
from post.types import PostType
from investor.types import InvestorType
from investor.models import Investor

class Comment(graphene.Mutation):
    comment = graphene.Field(CommentType)
    class Arguments:
        post = graphene.Field(PostType)
        investor = graphene.Field(InvestorType)
        comment = graphene.String()

    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        postId = kwargs['postId']
        commentt = kwargs['comment']
        investor = Investor.objects.get(account_id = user.id)
        post = Post.objects.get(id = postId)
        
        comment = Comment(
            investor = investor,
            post = post,
            comment = commentt
        )
        comment.save()
        return Comment(
            comment = comment
        )


class DeleteComment(graphene.ObjectType):
    comment = graphene.Field(CommentType)
    class Arguments:
        id = graphene.Int()
    def mutate(self, info, commentId):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        comment = Comment.objects.get(id = commentId).delete()
        comment.save()
        return Comment(
            comment = comment
        )

class UpdateComment(graphene.ObjectType):
    comment = graphene.Field(CommentType)
    class Arguments:
        id = graphene.Int()
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        commentId = kwargs['id']
        comment = Comment.objects.get(id = commentId).delete()
        comment.comment = kwargs['comment']
        comment.save()
        return Comment(
            comment = comment
        )  
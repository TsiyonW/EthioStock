import graphene 
from comment.models import Comment
from comment.types import CommentType
from post.types import PostType
from post.models import Post
from account.models import Account

class CreateComment(graphene.Mutation):
    commentPosted = graphene.Field(CommentType)

    class Arguments:
        post_id = graphene.Int(required = True)
        comment = graphene.String(required = True)

    #get user inputs and save to database
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        commentedBy = Account.objects.get(id = user.id)
        
        post_id = kwargs['post_id']
        post = Post.objects.get(id = post_id)
        commentt = kwargs['comment']
        comment = Comment(
            commentedBy = commentedBy,
            post = post,
            comment = commentt

        )
        comment.save()

        return CreateComment(
            commentPosted  = comment
        )

#delete coment
class DeleteComment(graphene.Mutation):
    removeSuccess = graphene.Boolean()
    class Arguments:
        commentId = graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        commentId = kwargs['commentId']
        try:
            Comment.objects.get(id = commentId).delete()
        except:
            raise Exception("Can not get comment with id: "+str(commentId)+ " .")

        

        return {"removeSuccess":True}


class UpdateComment(graphene.Mutation):
    commentUpdated = graphene.Field(CommentType)
    class Arguments:
        id = graphene.Int(required=True)
        comment = graphene.String()

    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        commentId = kwargs['id']
        comment = Comment.objects.get(id = commentId)
        comment.comment = kwargs['comment']
        comment.save()
        return UpdateComment(
            commentUpdated = comment
        )  

        #register mutations 
class Mutation(graphene.ObjectType):
    comment = CreateComment.Field()
    delete_comment = DeleteComment.Field()
    update_comment = UpdateComment.Field()
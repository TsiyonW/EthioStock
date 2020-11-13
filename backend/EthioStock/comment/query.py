import graphene
from .models import Comment
from post.models import Post
from .types import CommentType

class Query(graphene.ObjectType):
    comments = graphene.List(CommentType)

    def resolve_comments(self, info, postId):
        return Comment.objects.filter(post_id = postId)     
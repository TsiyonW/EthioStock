import graphene
from .models import Post
from businessowner.models import Businessowner
from businessowner.types import BusinessownerType
from graphene_file_upload.scalars import Upload

class CreatePost(graphene.Mutation):
    id = graphene.Int()
    owner = graphene.Field(BusinessownerType)
    description = graphene.String()
    image = Upload()
    date = graphene.DateTime()

    class Arguments:
        owner  = graphene.Int(required = True)
        description = graphene.Int(required = True)
        image = Upload()
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not Logged in!')
        owner = Businessowner.objects.get(account_id = user.id)
        description = kwargs['description']
        image = kwargs['image']

        post = Post(
            owner = owner,
            description = description,
            image = image,

        )
        post.save()


        return Post(
            id = post.id,
            owner = post.owner,
            description = post.description,
            image  = post.image,
            date = post.date
        )
class UpdatePost(graphene.Mutation):
    id = graphene.Int()
    class Arguments:
        id= graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")

class DeletePost(graphene.Mutation):
    id = graphene.Int()
    class Arguments:
        id = graphene.Int(required = True)
    def mutate(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception("Not Logged in!")
        

class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    delete_post = DeletePost.Field()
    update_post = UpdatePost.Field()
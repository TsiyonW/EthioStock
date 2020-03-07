import graphene
from .models import Post
from .types import PostType
from businessowner.models import Businessowner

class Query(graphene.ObjectType):
    postsByTitle = graphene.List(PostType)
    myPosts = graphene.List(PostType)
    postsByDate = graphene.List(PostType)
    postByBusiness = graphene.List(PostType)

    def resolve_postsByTitle(self,info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
        title = kwargs['title']
        return Post.objects.filter(title = title)

    def resolve_myPosts(self, info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
        me = Businessowner.objects.get(account_id = user.id)
        return Post.objects.filter(owner = me)

    def resolve_postsByDate(self, info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
        date = kwargs['date']
        return Post.objects.filter(date = date)

    def resolve_postByBusiness(self, info,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            raise Exception('Not authorized')
        businessId =kwargs['id']
        business = Businessowner.objects.get(id = businessId)
        return Post.objects.get(owner = business )
    


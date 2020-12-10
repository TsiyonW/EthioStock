import graphene
from .models import Post
from .types import PostType
from businessowner.models import Businessowner

class Query(graphene.ObjectType):
    postsByTitle = graphene.List(PostType, title = graphene.String(), first=graphene.Int(), skip = graphene.Int())
    myPosts = graphene.List(PostType, first=graphene.Int(), skip = graphene.Int())
    allPosts = graphene.List(PostType, first=graphene.Int(), skip = graphene.Int())
    postsByDate = graphene.List(PostType, date = graphene.DateTime(), first=graphene.Int(), skip = graphene.Int())
    postByBusiness = graphene.List(PostType, business_id = graphene.Int(), first=graphene.Int(), skip = graphene.Int())


    def resolve_allPosts(self,info,first=None,skip=None,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        post =  Post.objects.all()
        if skip:
            post = post[skip:]
        if first:
            post = post[:first]
        return post

    def resolve_postsByTitle(self,info,title,first=None,skip=None):
        user = info.context.user
        if(user.is_anonymous):
            return None
        post =  Post.objects.filter(title = title)
        if skip:
            post = post[skip:]
        if first:
            post = post[:first]
        return post
        
    def resolve_myPosts(self, info, first=None,skip=None,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        me = Businessowner.objects.get(account_id = user.id)
        post =  Post.objects.filter(owner = me)
        if skip:
            post = post[skip:]
        if first:
            post = post[:first]
        return post
        
    def resolve_postsByDate(self, info,date,first=None,skip=None):
        user = info.context.user
        if(user.is_anonymous):
            return None
        post = Post.objects.filter(date = date)
        if skip:
            post = post[skip:]
        if first:
            post = post[:first]
        return post
        

    def resolve_postByBusiness(self, info,business_id,first=None,skip=None,):
        user = info.context.user
        if(user.is_anonymous):
            return None
        business = Businessowner.objects.get(id = business_id)
        post =  Post.objects.get(owner = business )
        if skip:
            post = post[skip:]
        if first:
            post = post[:first]
        return post
        
    


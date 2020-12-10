import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from django.db.models import Q
from admina.models import Admina
from admina.types import AdminType

class Query(graphene.ObjectType):
    
    allAdmins = graphene.List( AdminType, first=graphene.Int(), skip = graphene.Int() )
    myAdminAccount = graphene.Field(AdminType)
    getAdminById = graphene.Field(AdminType, admin_id = graphene.Int())
    searchAdmin = graphene.List(AdminType, search = graphene.String(), first=graphene.Int(), skip = graphene.Int())
    isAdminFirst  = graphene.Boolean()
    #create a resolver to return all the records
    def resolve_isAdminFirst(self,info,**kwargs):
            admin = Admina.objects.all().count()
            if(admin>0):
                return False
            return True
    def resolve_allAdmins(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(user.user_type!="Admin"):
            return None
            
        adminEsists = Admina.objects.all().exists()
        if(not adminEsists):
            return None
        admins = Admina.objects.all()
        if skip:
            admins = admins[skip:]
        if first:
            admins = admins[:first]
        return admins
        
    #create a resolver to return user's profile
    def resolve_myAdminAccount(self,info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(user.user_type != "Admin"):
            return None

        adminEsists = Admina.objects.filter(id = user.id).exists()
        if(not adminEsists):
            return None
        admin = Admina.objects.get(account_id = user.id)   
        return admin
        

    def resolve_getAdminById(self,info,admin_id):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(user.user_type != "Admin"):
            return None
        adminEsists = Admina.objects.filter(id = admin_id).exists()
        if(not adminEsists):
            return None
        admin = Admina.objects.get(id = admin_id)
        return admin

    def resolve_searchAdmin(self, info,search=None,first=None,skip=None ,**kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        if(user.user_type != "Admin"):
            return None
        adminExists = Admina.objects.all().exists()
        if(not adminExists):
            return None
        admin = Admina.objects.all()
        if(search):
            #if the search parameter can be int assume that as an id
            if(search.isnumeric()):
                filter = (
                    Q(id=search)
                )
            else:
                filter = (
                    Q(firstName__icontains=search) | 
                    Q(lastName__icontains=search) |
                    Q(account__username = search) |
                    Q(account__email__icontains = search) 
                    
    
                ) 
            admin = admin.filter(filter)
        if skip:
            admin = admin[skip:]
        if first:
            admin = admin[:first]
        return admin
    
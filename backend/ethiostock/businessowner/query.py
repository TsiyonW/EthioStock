import graphene
from graphene_django import DjangoObjectType
from businessowner.models import  Businessowner
from django.db.models import Q
from account.models import Account
from businessowner.types import BusinessownerType
from businessowner.types import BusinessownerAccountUnionType

class Query(graphene.ObjectType):
    
    allBusinessowners = graphene.List( BusinessownerType, first=graphene.Int(), skip = graphene.Int() )
    myBusinessAccount = graphene.Field(BusinessownerType)
    getBusinessById = graphene.Field(BusinessownerType, business_id = graphene.Int())
    businessToBeVerified = graphene.List( BusinessownerType , first=graphene.Int(), skip = graphene.Int())
    searchBusiness = graphene.List(BusinessownerType, search = graphene.String(), first=graphene.Int(), skip = graphene.Int())

    #create a resolver to return all the records
    def resolve_allBusinessowners(self, info,first=None,skip=None, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        business =   Businessowner.objects.all()
        if skip:
            business = business[skip:]
        if first:
            business = business[:first]
        return business
        
    #create a resolver to return user's profile
    def resolve_myBusinessAccount(self,info, **kwargs):
        user = info.context.user
        if(user.is_anonymous):
            return None
        elif(user.user_type == "Business Owner"):
            business = Businessowner.objects.get(account_id = user.id)
            
            return business
        else:
            return None

    def resolve_getBusinessById(self,info,business_id):
        businessExists = Businessowner.objects.filter(id = business_id).exists()
        if(not businessExists):
            return None
        business = Businessowner.objects.get(id = business_id)
        return business

    def resolve_businessToBeVerified(self,info,first=None,skip=None,**kwargs):
        businessNotVerified = Businessowner.objects.filter(is_valid_account='PA' or 'PU')
        if skip:
            businessNotVerified = businessNotVerified[skip:]
        if first:
            businessNotVerified = businessNotVerified[:first]
        return businessNotVerified

    def resolve_searchBusiness(self, info,search=None,first=None,skip=None ,**kwargs):
        business = Businessowner.objects.all()
        if(search):
            #if the search parameter can be int assume that as an id
            if(search.isnumeric()):
                filter = (
                    Q(id=search)
                )
            else:
                filter = (
                    Q(business__icontains=search) | 
                    Q(category__icontains=search) |
                    Q(account__username = search) |
                    Q(account__email__icontains = search) 
                    
    
                ) 
            business = business.filter(filter)
        if skip:
            business = business[skip:]
        if first:
            business = business[:first]
        return business
    
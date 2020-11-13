import graphene
from investor.models import Investor
from investor.types import InvestorType, InvestorAccountUnionType
from account.models import Account

class Query(graphene.ObjectType):
    investors = graphene.List(InvestorType)
    getInvestorById = graphene.List(InvestorType)
    myInvestorAccount = graphene.List(InvestorAccountUnionType)

    def resolve_investors(self, info, **kwargs):
        user =info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return Investor.objects.all()

    def resolve_getInvestorById(self,info,investor_id):
        user =info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return Investor.objects.get(id = investor_id)

    def resolve_myInvestorAccount(self,info,**kwargs):
        user =info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        elif user.user_type == "Business owner":
            raise Exception("You are a businessowner not an investor")

        account = Account.objects.get(id = user.id) 
        investor = Investor.objects.get(account_id = user.id)
            
        return account, investor

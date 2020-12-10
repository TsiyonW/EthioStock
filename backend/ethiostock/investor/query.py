import graphene
from investor.models import Investor
from investor.types import InvestorType
from account.models import Account
from account.types import AccountType
from graphql import GraphQLError

class Query(graphene.ObjectType):
    investors = graphene.List(AccountType, first=graphene.Int(), skip = graphene.Int())
    getInvestorById = graphene.Field(AccountType, investor_id =graphene.Int())
    myInvestorAccount = graphene.Field(AccountType)
    getFullInvestorInfoById = graphene.Field(InvestorType, investor_id = graphene.Int())

    # if user type is investor return everyone
    def resolve_investors(self, info, first = None, skip = None,**kwargs):
        user =info.context.user
        if user.is_anonymous:
            return None
        investorExists = Account.objects.filter(user_type="Investor").exists()
        if(not investorExists):
            return None
        investorAccounts = Account.objects.filter(user_type = "Investor")
        if skip:
            investorAccounts = investorAccounts[skip:]
        if first:
            investorAccounts = investorAccounts[:first]
        return investorAccounts

    # get investor by id if exists
    def resolve_getInvestorById(self,info,investor_id):
        user =info.context.user
        if user.is_anonymous:
            return None
        investorExists = Account.objects.filter(id = investor_id, user_type="Investor").exists()
        if(not investorExists):
            return None
        return Account.objects.get(id = investor_id)

    #get logged in investor account
    def resolve_myInvestorAccount(self,info,**kwargs):
        user =info.context.user
        if user.is_anonymous:
            return None
        elif user.user_type == "Business owner":
            return None
        investorExists = Account.objects.filter(id = user.id, user_type="Investor").exists()
        if(not investorExists):
            return None
        investor = Account.objects.get(id = user.id)
        return investor
        
    # if investor fills all the forms return investor info
    def resolve_getFullInvestorInfoById(self,info,investor_id,**kwargs):
        user = info.context.user
        if user.is_anonymous:
            return None
        investorInfoExists = Investor.objects.filter(account_id = investor_id).exists()
        if(not investorInfoExists):
            return None
        return Investor.objects.get(account_id =investor_id)



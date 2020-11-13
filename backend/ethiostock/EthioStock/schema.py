import graphene
import graphql_jwt
import investor.query
import investor.mutation
import account.query
import account.mutation
import businessowner.query
import businessowner.mutation
import account.query
import account.mutation
import stock.query
import stock.mutation
import follower.query
import follower.mutation
import watchlist.query
import watchlist.mutation
import post.mutation
import reaction.mutation
from account.types import AccountType

class ObtainJSONWebToken(graphql_jwt.JSONWebTokenMutation):
    user = graphene.Field(AccountType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)
class AuthMutation(graphene.ObjectType):
    token_auth = ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    revoke_token = graphql_jwt.Revoke.Field()

class Query(businessowner.query.Query, 
        account.query.Query, 
        investor.query.Query, 
        stock.query.Query,
        follower.query.Query,
        watchlist.query.Query,
        graphene.ObjectType,
        ):
    pass

class Mutation(
    AuthMutation,
    businessowner.mutation.Mutation, 
    account.mutation.Mutation , 
    investor.mutation.Mutation,
    stock.mutation.Mutation,
    follower.mutation.Mutation,
    watchlist.mutation.Mutation,
    post.mutation.Mutation,
    reaction.mutation.Mutation,
    graphene.ObjectType
    ):

    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
import graphene
import graphql_jwt
import investor.query
import investor.mutation
import account.query
import businessowner.query
import businessowner.mutation
import stock.query
import stock.mutation
import follower.query
import follower.mutation
import watchlist.query
import watchlist.mutation
import comment.mutation
import comment.query
import post.mutation
import post.query
import userreport.mutation
import userreport.query
import reaction.mutation
import reaction.query
import admina.mutation
import admina.query
import businessowner.subscription
import investor.subscription

from account.types import AccountType
from graphql_auth import mutations
from graphql_auth.schema import MeQuery
from account.types import AccountType
class ObtainJSONWebToken(graphql_jwt.JSONWebTokenMutation):
    user = graphene.Field(AccountType)

    @classmethod
    def resolve(cls, root, info, **kwargs):
        return cls(user=info.context.user)

class AuthMutation(graphene.ObjectType):

    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    resend_activation_email = mutations.ResendActivationEmail.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    password_change = mutations.PasswordChange.Field()
    archive_account = mutations.ArchiveAccount.Field()
    delete_account = mutations.DeleteAccount.Field()
    update_account = mutations.UpdateAccount.Field()
    swap_emails = mutations.SwapEmails.Field()

    # django-graphql-jwt inheritances
    token_auth = mutations.ObtainJSONWebToken.Field()
    verify_token = mutations.VerifyToken.Field()
    # refresh_token = mutations.RefreshToken.Field()
    # revoke_token = mutations.RevokeToken.Field()


class Query(businessowner.query.Query, 
        account.query.Query, 
        investor.query.Query, 
        stock.query.Query,
        follower.query.Query,
        watchlist.query.Query,
        admina.query.Query,
        # comment.query.Query,
        post.query.Query,
        MeQuery,
        graphene.ObjectType
        ):
    pass

class Mutation(
    AuthMutation,
    admina.mutation.Mutation,
    businessowner.mutation.Mutation, 
    investor.mutation.Mutation,
    stock.mutation.Mutation,
    follower.mutation.Mutation,
    comment.mutation.Mutation,
    userreport.mutation.Mutation,
    watchlist.mutation.Mutation,
    post.mutation.Mutation,
    reaction.mutation.Mutation,
    graphene.ObjectType
    ):

    pass

class Subscription(
    businessowner.subscription.Subscription,
    investor.subscription.Subscription

):
    print("here in subscription")
    pass

schema = graphene.Schema(
    query=Query, 
    mutation=Mutation,
    subscription=Subscription
    )
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

class Query(businessowner.query.Query, 
        account.query.Query, 
        investor.query.Query, 
        graphene.ObjectType
        ):
    pass

class Mutation(
    businessowner.mutation.Mutation, 
    account.mutation.Mutation , 
    investor.mutation.Mutation,
    graphene.ObjectType
    ):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
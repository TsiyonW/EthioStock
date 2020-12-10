from django.urls import re_path
from graphene_subscriptions.consumers import GraphqlSubscriptionConsumer
from django.urls import path
websocket_urlpatterns = [
    path('graphql',GraphqlSubscriptionConsumer),
    # before I wrote 'alarm/', I just change from alarm/ to alarm
]
# websocket_urlpatterns = [
#     re_path(r'ws/graphql/(?P<investor_name>\w+)/$',GraphqlSubscriptionConsumer
# ),
# ]


# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.conf.urls import url

# from django.core.asgi import get_asgi_application
# from graphene_subscriptions.consumers import GraphqlSubscriptionConsumer

# application = ProtocolTypeRouter({
#     "websocket": URLRouter([
#         url(r"^graphql/$", GraphqlSubscriptionConsumer),
#         url("graphql/", GraphqlSubscriptionConsumer),
#         url("/graphql/", GraphqlSubscriptionConsumer),
#         url(r"^graphql/$", GraphqlSubscriptionConsumer)
#     ]),
# })


# # r'^ws/chat/(?P<room_name>[^/]+)/$'
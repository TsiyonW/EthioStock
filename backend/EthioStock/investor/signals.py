# your_app/signals.py
from django.db.models.signals import post_save, post_delete
from graphene_subscriptions.signals import (
    post_delete_subscription,
    post_save_subscription,
)
from investor.models import Investor
post_save.connect(post_save_subscription, sender=Investor, dispatch_uid="Investor_post_save")
post_delete.connect(post_delete_subscription, sender=Investor, dispatch_uid="Investor_post_delete")

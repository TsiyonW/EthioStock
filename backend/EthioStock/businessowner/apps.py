from django.apps import AppConfig
from django.db.models.signals import post_save
def my_callback(sender, **kwargs):
    print("create triggered")
    pass

class BusinessownerConfig(AppConfig):
    name = 'businessowner'
    print("here at least")
    # def ready(self):
        # post_save.connect(my_callback, sender=self)
        # print("businessowner config")

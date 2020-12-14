from django.apps import AppConfig

from django.db.models.signals import post_save
def my_callback(sender, **kwargs):
    print("in my_callback")
class InvestorConfig(AppConfig):
    name = 'investor'
    # def ready(self):
    #     print("printing")
    def ready(self):
        import investor.signals
        # post_save.connect(my_callback, sender=self)
        print("businessowner config")
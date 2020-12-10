from django.db import models
from account.models import Account
def user_directory_path(instance, filename):
    return 'profile/admins/user_{0}/{1}'.format(instance.account.id, filename)

class Admina(models.Model):
    
    invited_by = models.ForeignKey(
        Account,
        on_delete=models.DO_NOTHING, 
        related_name = "invitedBy"
    )
    account = models.OneToOneField(
        Account, on_delete = models.CASCADE, 
        related_name="account"
    )
    profile_pic =models.ImageField(null =True, blank=True, upload_to=user_directory_path)
    
    

    
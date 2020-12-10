from django.db import models
from account.models import Account
from django.utils.translation import gettext_lazy as _
def legality_directory_path(instance, filename):
    return 'legality/user_{0}/{1}'.format(instance.account.id, filename)
def user_directory_path(instance, filename):
    return 'profile/business/user_{0}/{1}'.format(instance.account.id, filename)

class Businessowner(models.Model):
    class AccountValidationOptions(models.TextChoices):
        PENDINGAPPROVAL = 'PA', _('Pending Approval')
        APPROVED = 'AP', _('Approved')
        DECLINED = 'DE', _('Declined')
        PENDINGUPDATE = 'PU', _('Pending Update')

    business_name = models.TextField( max_length=40,blank=True)
    account = models.OneToOneField(
        Account, on_delete = models.CASCADE
    )
    website = models.URLField(blank=True, null= True)
    category =  models.CharField( max_length=20,blank=True )
    is_valid_account = models.CharField(
        max_length = 2,
        choices = AccountValidationOptions.choices, 
        default = AccountValidationOptions.PENDINGAPPROVAL)
    legality  = models.ImageField(null =True, blank=True, upload_to=legality_directory_path)
    profile_pic =models.ImageField(null =True, blank=True, upload_to=user_directory_path)
   

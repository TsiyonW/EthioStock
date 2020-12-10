from django.db import models
from account.models import Account
def user_directory_path(instance, filename):
    return 'profile/investors/user_{0}/{1}'.format(instance.account.id, filename)

class Investor(models.Model):
    account = models.OneToOneField(
        Account, on_delete = models.CASCADE
    )
    investor_kebele                 = models.CharField( max_length=20 )
    investor_house_no               = models.CharField( max_length=20,null =True, blank=True, )
    investor_occupation             = models.CharField( max_length=20 ,null =True, blank=True,)
    investor_resident_ID              = models.CharField( max_length=20,null =True, blank=True, ) 
    investor_driving_licence_ID     = models.CharField( max_length=20,null =True, blank=True, ) 
    investor_passport_number        = models.CharField( max_length=20,null =True, blank=True, )
    investor_nationality            = models.CharField( max_length=20 ) 
    respondent_first_name           = models.CharField( max_length=20 ) 
    respondent_middle_name          = models.CharField( max_length=20 ) 
    respondent_last_name            = models.CharField( max_length=20 ) 
    respondent_kebele               = models.CharField( max_length=10,null =True, blank=True,  ) 
    respondent_house_no             = models.CharField( max_length=20,null =True, blank=True, ) 
    respondent_occupation           = models.CharField( max_length=20,null =True, blank=True, ) 
    respondent_phone_no             = models.CharField( max_length=10 ) 
    respondent_resident_ID            = models.CharField( max_length=10,null =True, blank=True, ) 
    respondent_driving_licence_ID   = models.CharField( max_length=20 ,null =True, blank=True,) 
    respondent_passport_number       = models.CharField( max_length=10,null =True, blank=True, ) 
    profile_pic                     = models.ImageField(null =True, blank=True, upload_to=user_directory_path)
    
    


        
    

    
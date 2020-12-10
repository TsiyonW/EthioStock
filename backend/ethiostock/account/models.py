from django.db import models
from django.contrib.auth.models import AbstractUser
from graphql_jwt.shortcuts import create_refresh_token, get_token

def user_directory_path(instance, filename):
    return 'profile/user_{0}/{1}'.format(instance.account.id, filename)

class Account(AbstractUser):
    
    USERTYPE = (('B','Business Owner'), ('I','Investor'), ('A','Admin'))
    email        = models.EmailField(verbose_name='email',max_length=60, unique=True)
    username     = models.CharField(max_length=20, unique=True)
    first_name  = models.CharField(max_length = 20)
    middle_name  = models.CharField(max_length = 20)
    last_name  = models.CharField(max_length = 20)
    user_type    = models.CharField(max_length = 16)
    phone_no      = models.CharField(max_length=13)
    subcity      = models.CharField(max_length=30,) 
    woreda       = models.IntegerField()
    address     = models.TextField()
    sex         = models.CharField(max_length=6)
    account_linked     = models.BooleanField(default=False)
    
    date_joined  = models.DateTimeField(verbose_name='date joined', auto_now=True)
    last_login   = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin     = models.BooleanField(default=False)
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    

    #login with email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'user_type', 
                        'phone_no','subcity','woreda', 'address']


    def __str__(self):
        return self.email
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class MyAccountManager(BaseUserManager):
    def create_user(self,email,username, sex,first_name,user_type,last_name,
        phoneNo,subcity,woreda, password=None):
        user = self.model(
            email       = self.normalize_email(email),
            username    = self.username, 
            sex         = self.sex,
            first_name  = self.first_name,
            user_type   = self.user_type,
            last_name   = self.last_name,
            phoneNo     = self.phoneNo,
            subcity     = self.subcity,
            woreda      = self.woreda
        )
        user.set_password(password)
        user.save(user = self._db)
        return user
        
    def create_superuser(self,email,username, sex,first_name,user_type,last_name,
        phoneNo,subcity,woreda,password):
        user = self.model(
            email       = self.normalize_email(email),
            password    = password,
            sex         = sex,
            first_name  = first_name,
            last_name   = last_name,
            phoneNo     = phoneNo,
            subcity     = subcity,
            woreda      = woreda,
            user_type   = user_type
        )
        user.is_admin = True
        user.user_type = 'Admin'
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    
    USERTYPE = (('B','Business Owner'), ('I','Investor'), ('A','Admin'))
    email        = models.EmailField(verbose_name='email',max_length=60, unique=True)
    username     = models.CharField(max_length=20, unique=True)
    date_joined  = models.DateTimeField(verbose_name='date joined', auto_now=True)
    last_login   = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin     = models.BooleanField(default=False)
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    sex          = models.CharField(max_length=6)
    first_name   = models.CharField(max_length=30)
    user_type    = models.CharField(max_length = 16)
    last_name    = models.CharField(max_length = 30)
    phoneNo      = models.CharField(max_length=13)
    subcity      = models.CharField(max_length=30,) 
    woreda       = models.IntegerField()


    #login with email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','sex', 'first_name', 'user_type', 'last_name', 
                        'phoneNo','subcity','woreda']

    objects = MyAccountManager()

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj =None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True
    
from django.contrib import admin
from .models import Investor

# Register the model investor to be able access it in the admin page
admin.site.register(Investor)
# Generated by Django 3.1.3 on 2020-11-30 17:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('businessowner', '0004_businessowner_profile_pic'),
    ]

    operations = [
        migrations.RenameField(
            model_name='businessowner',
            old_name='business',
            new_name='business_name',
        ),
    ]

# Generated by Django 3.1.3 on 2020-11-28 11:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20201128_0954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='profile_pic',
        ),
    ]

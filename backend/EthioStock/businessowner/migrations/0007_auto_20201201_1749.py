# Generated by Django 3.1.3 on 2020-12-01 14:49

import businessowner.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('businessowner', '0006_auto_20201201_1535'),
    ]

    operations = [
        migrations.AlterField(
            model_name='businessowner',
            name='legality',
            field=models.ImageField(blank=True, null=True, upload_to=businessowner.models.legality_directory_path),
        ),
    ]

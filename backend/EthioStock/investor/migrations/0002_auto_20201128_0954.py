# Generated by Django 3.1.3 on 2020-11-28 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('investor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='investor',
            name='first_name',
            field=models.CharField(default='firstname', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='investor',
            name='last_name',
            field=models.CharField(default='lastname', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='investor',
            name='sex',
            field=models.CharField(default='Female', max_length=6),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.1.3 on 2020-12-04 10:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userreport', '0002_auto_20201123_1018'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userreport',
            old_name='reportDate',
            new_name='report_date',
        ),
        migrations.RenameField(
            model_name='userreport',
            old_name='reportedBy',
            new_name='reported_by',
        ),
        migrations.RenameField(
            model_name='userreport',
            old_name='reportedUser',
            new_name='reported_user',
        ),
    ]

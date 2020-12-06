# Generated by Django 3.1.3 on 2020-11-23 07:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('userreport', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userreport',
            name='reportedBy',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='reportedBy', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='userreport',
            name='reportedUser',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='reportedUser', to=settings.AUTH_USER_MODEL),
        ),
    ]
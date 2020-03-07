# Generated by Django 3.0.3 on 2020-02-27 14:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('businessowner', '0001_initial'),
        ('investor', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Follower',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('businessId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='businessowner.Businessowner')),
                ('investorId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='investor.Investor')),
            ],
        ),
    ]
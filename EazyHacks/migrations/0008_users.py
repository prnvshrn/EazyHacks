# Generated by Django 2.0 on 2018-01-27 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EazyHacks', '0007_auto_20180119_2317'),
    ]

    operations = [
        migrations.CreateModel(
            name='users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
    ]
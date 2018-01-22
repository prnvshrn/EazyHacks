# Generated by Django 2.0 on 2018-01-20 05:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('EazyHacks', '0004_delete_hackoverview'),
    ]

    operations = [
        migrations.CreateModel(
            name='HackDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Hack_step', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='HackOverview',
            fields=[
                ('Hack_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='hackdetails',
            name='Hack_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EazyHacks.HackOverview'),
        ),
    ]
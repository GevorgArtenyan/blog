# Generated by Django 2.2.3 on 2019-11-17 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('warhammerwiki', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unit',
            name='health_per_entity',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='unit',
            name='mp_cost',
            field=models.IntegerField(),
        ),
    ]

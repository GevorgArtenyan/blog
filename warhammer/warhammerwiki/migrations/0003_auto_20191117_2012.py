# Generated by Django 2.2.3 on 2019-11-17 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('warhammerwiki', '0002_auto_20191117_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unit',
            name='attack_interval',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
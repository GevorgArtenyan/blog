# Generated by Django 2.2.3 on 2019-12-19 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('warhammerwiki', '0012_remove_unit_no_shield'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unit',
            name='calibration_area',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='unit',
            name='reload_time',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
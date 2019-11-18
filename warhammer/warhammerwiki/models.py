from django.db import models
from django.template.defaultfilters import slugify
from PIL import Image

class Race(models.Model):
    race_image = models.ImageField(upload_to='profile_pics')
    race_name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.race_name)
        super(Race, self).save(*args, **kwargs)

        img = Image.open(self.race_image.path)

        if img.height > 100 or img.width > 100:
            output_size = (100, 100)
            img.thumbnail(output_size)
            img.save(self.race_image.path)

    def __str__(self):
        return self.race_name






class Unit(models.Model):
    race = models.ForeignKey(Race, on_delete=models.CASCADE)
    unit_name = models.CharField(max_length=200)
    unit_image = models.ImageField(upload_to='profile_pics')
    cost = models.IntegerField()
    upkeep = models.IntegerField()
    mp_cost = models.IntegerField()
    health = models.IntegerField()
    health_per_entity = models.IntegerField()
    armour = models.IntegerField()
    parry_chance = models.IntegerField()
    ward_save = models.IntegerField()
    physical_resistance = models.IntegerField()
    missile_resistance = models.IntegerField()
    magic_resistance = models.IntegerField()
    fire_resistance = models.IntegerField()
    leadership = models.IntegerField()
    speed = models.IntegerField()
    melee_attack = models.IntegerField()
    attack_interval = models.DecimalField(max_digits=5, decimal_places=2)
    melee_defence = models.IntegerField()
    weapon_strenght = models.IntegerField()
    base_damage = models.IntegerField()
    ap_damage = models.IntegerField()
    bonus_vs_large = models.IntegerField()
    bonus_vs_infantry = models.IntegerField()
    charge_bonus = models.IntegerField()
    ammunition = models.IntegerField()
    range = models.IntegerField()
    missile_damage = models.IntegerField()
    missile_base_damage = models.IntegerField()
    missile_ap_damage = models.IntegerField()
    missile_bonus_vs_infantry = models.IntegerField()
    missile_bonus_vs_large = models.IntegerField()
    explosion_base_damage = models.IntegerField()
    explosion_ap_damage = models.IntegerField()
    shot_per_volley = models.IntegerField()
    projectile_number = models.IntegerField()
    reload_time = models.IntegerField()
    total_accuracy = models.IntegerField()
    calibration_distance = models.IntegerField()
    calibration_area = models.IntegerField()
    fatigue_modifier  = models.IntegerField()


    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.unit_name)
        super(Unit, self).save(*args, **kwargs)

    def __str__(self):
        return self.unit_name




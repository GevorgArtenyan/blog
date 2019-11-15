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
    health = models.IntegerField()
    armour = models.IntegerField()
    leadership = models.IntegerField()
    speed = models.IntegerField()
    melee_attack = models.IntegerField()
    melee_defence = models.IntegerField()
    weapon_strenght = models.IntegerField()
    charge_bonus = models.IntegerField()
    ammunition = models.IntegerField()
    range = models.IntegerField()
    missile_damage = models.IntegerField()
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.unit_name)
        super(Unit, self).save(*args, **kwargs)

    def __str__(self):
        return self.unit_name




from django import forms
from .models import Unit, Race

class PageForm(forms.ModelForm):
    unit_name = forms.CharField(max_length=200)
    cost = forms.IntegerField()
    upkeep = forms.IntegerField()
    health = forms.IntegerField()
    armour = forms.IntegerField()
    leadership = forms.IntegerField()
    speed = forms.IntegerField()
    melee_attack = forms.IntegerField()
    melee_defence = forms.IntegerField()
    weapon_strenght = forms.IntegerField()
    charge_bonus = forms.IntegerField()
    ammunition = forms.IntegerField()
    range = forms.IntegerField()
    missile_damage = forms.IntegerField()

    class Meta:
        model = Unit
        exclude = ('unit_name', 'cost', 'upkeep', 'health',
                   'armour', 'leadership', 'speed', 'melee_attack',
                   'melee_defence', 'charge_bonus', 'charge_bonus', 'ammunition',
                   'range', 'missile_damage')


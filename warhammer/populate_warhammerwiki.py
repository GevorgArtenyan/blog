import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
'warhammer.settings')

import django
django.setup()
from warhammerwiki.models import Race, Unit
from warhammerwiki.data_from_xml import all_stats
from warhammerwiki.data_from_xml import all_stats
from math import *

stat_template = {'unit_name': '',
        'unit_image': '',
         'unit_desciption':'',
        'key':'',
        'category':'',
        'cost':0,
        'upkeep':0,
        'mp_cost': 0,
        'health': 0,
        'health_per_entity': 0,
        'armour': 0,
        'bronze_shield': False,
        'silver_shield': False,
        'parry_chance': 0,
        'ward_save': 0,
        'physical_resistance': 0,
        'missile_resistance': 0,
        'magic_resistance': 0,
        'fire_resistance': 0,
        'leadership': 0,
        'speed': 0,
        'melee_attack': 0,
        'melee_fire_attack': False,
        'melee_magic_attack':  False,
        'melee_poison_attack': False,
        'frostbite': False,
        'sundered_armour': False,
        'weeping_blade': False,
        'disturbed': False,
        'charmed': False,
        'contaminated': False,
        'melee_burnt':False,
        'attack_interval': 0,
        'melee_defence': 0,
        'weapon_strenght': 0,
        'melee_ap_yes_no': False,
        'melee_bonus_large_yes_no': False,
        'melee_bonus_inf_yes_no': False,
        'base_damage': 0,
        'ap_damage': 0,
        'bonus_vs_large': 0,
        'bonus_vs_infantry': 0,
        'charge_bonus': 0,
        'ammunition': 0,
        'missile_fire_attack': False,
        'missile_magic_attack': False,
        'suppressed': False,
        'range': 0,
        'missile_damage': 0,
        'missile_ap_yes_no': False,
        'missile_bonus_large_yes_no': False,
        'missile_bonus_inf_yes_no': False,
        'missile_poison_attack': False,
        'missile_sundered_armour': False,
        'zzzzap': False,
        'flammable': False,
        'blinded': False,
        'monstrous_impact': False,
        'missile_disturbed': False,
        'shieldbreaker': False,
        'missile_burnt': False,
        'take_cover':False,
        'poisoned_wind': False,
        'missile_discouraged':False,
        'madness_of_khaine': False,
        'missile_contaminated': False,
        'missile_base_damage': 0,
        'missile_ap_damage': 0,
        'missile_bonus_vs_infantry': 0,
        'missile_bonus_vs_large': 0,
        'explosion_base_damage': 0,
        'explosion_ap_damage': 0,
        'shot_per_volley': 0,
        'projectile_number': 0,
        'reload_time': 0,
        'total_accuracy': 0,
        'calibration_distance': 0,
        'calibration_area': 0,
        'fatigue_modifier': 0}


all_units = []

for i in range(len(all_stats)):
    all_units.append(stat_template.copy())
    all_units[i]['unit_name'] = all_stats[i]['unit_name']
    all_units[i]['key'] = all_stats[i]['key']
    all_units[i]['weight'] = all_stats[i]['weight']
    all_units[i]['category'] = all_stats[i]['category']
    all_units[i]['health'] = all_stats[i]['hp']
    all_units[i]['health_per_entity'] = all_stats[i]['health_per_entity']
    all_units[i]['leadership'] = all_stats[i]['leadership']
    all_units[i]['cost'] = all_stats[i]['recruitment_cost']
    all_units[i]['upkeep'] = all_stats[i]['upkeep']
    all_units[i]['mp_cost'] = all_stats[i]['multiplayer_cost']
    all_units[i]['melee_attack'] = all_stats[i]['melee_attack']
    all_units[i]['melee_defence'] = all_stats[i]['melee_defence']
    all_units[i]['charge_bonus'] = all_stats[i]['charge_bonus']
    all_units[i]['weapon_strenght'] = all_stats[i]['weapon_damage']
    all_units[i]['base_damage'] = all_stats[i]['base_damage']
    all_units[i]['ap_damage'] = all_stats[i]['ap_damage']
    all_units[i]['bonus_vs_large'] = all_stats[i]['bonus_vs_large']
    if all_stats[i]['bonus_vs_large'] > 0:
        all_units[i]['melee_bonus_large_yes_no'] = True
    all_units[i]['bonus_vs_infantry'] = all_stats[i]['bonus_vs_infantry']
    if all_stats[i]['bonus_vs_infantry'] > 0:
        all_units[i]['melee_bonus_inf_yes_no'] = True
    all_units[i]['attack_interval'] = all_stats[i]['melee_attack_interval']
    all_units[i]['armour'] = all_stats[i]['armour']
    all_units[i]['fire_resistance'] = all_stats[i]['fire_resistance']
    all_units[i]['magic_resistance'] = all_stats[i]['magic_resistance']
    all_units[i]['missile_resistance'] = all_stats[i]['missile_resistance']
    all_units[i]['physical_resistance'] = all_stats[i]['physical_resistance']
    all_units[i]['ward_save'] = all_stats[i]['ward_save']
    all_units[i]['parry_chance'] = all_stats[i]['missile_block_chance']
    all_units[i]['ammunition'] = all_stats[i]['ammo']
    all_units[i]['total_accuracy'] = all_stats[i]['accuracy']

    if 'missile_base_damage' in all_stats[i]:
        all_units[i]['missile_ap_damage'] = all_stats[i]['missile_ap_damage']
        all_units[i]['missile_base_damage'] = all_stats[i]['missile_base_damage']
        if all_stats[i]['missile_ap_damage'] > all_stats[i]['missile_base_damage']:
            all_units[i]['missile_ap_yes_no'] = True
        all_units[i]['range'] = all_stats[i]['range']
        all_units[i]['projectile_number'] = all_stats[i]['projectile_number']
        all_units[i]['calibration_area'] = all_stats[i]['calibration_area']
        all_units[i]['calibration_distance'] = all_stats[i]['calibration_distance']
        all_units[i]['reload_time'] = all_stats[i]['real_reload_time']
        all_units[i]['shot_per_volley'] = all_stats[i]['shots_per_volley']
        all_units[i]['missile_bonus_vs_infantry'] = all_stats[i]['missile_bonus_vs_infantry']
        if all_stats[i]['missile_bonus_vs_infantry'] > 0:
            all_units[i]['missile_bonus_inf_yes_no'] = True
        all_units[i]['missile_bonus_vs_large'] = all_stats[i]['missile_bonus_vs_large']
        if all_stats[i]['missile_bonus_vs_large'] > 0:
            all_units[i]['missile_bonus_large_yes_no'] = True
        all_units[i]['missile_damage'] = all_stats[i]['missile_damage']
        if all_stats[i]['missile_magic_attack'] > 0:
            all_units[i]['missile_magic_attack'] = True
        if all_stats[i]['missile_fire_attack'] > 0:
            all_units[i]['missile_fire_attack'] = True

        if all_stats[i]['contact_stat_effect'] == 'wh_main_unit_contact_poison':
            all_units[i]['missile_poison_attack'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh_main_unit_contact_morale':
            all_units[i]['missile_burnt'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc12_unit_passive_zzzap':
            all_units[i]['zzzzap'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc12_unit_contact_suppressive_fire':
            all_units[i]['suppressed'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc12_unit_contact_flammable':
            all_units[i]['flamable'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc11_unit_contact_disrupted':
            all_units[i]['disturbed'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc09_unit_contact_shieldbreaker':
            all_units[i]['shieldbreaker'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh_dlc06_unit_contact_sundered_armour':
            all_units[i]['missile_sundered_armour'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh_dlc06_unit_contact_blinded':
            all_units[i]['blinded'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc14_unit_contact_poisoned_wind':
            all_units[i]['poisoned_wind'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh_dlc06_unit_contact_discouraged':
            all_units[i]['missile_discouraged'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_dlc11_unit_contact_monstrous_impact':
            all_units[i]['monstrous_impact'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh_main_unit_contact_overhead_morale':
            all_units[i]['take_cover'] = True
        elif all_stats[i]['contact_stat_effect'] == 'wh2_main_unit_contact_plague_monk_censer_morale':
            all_units[i]['missile_contaminated'] = True

    else:
        all_units[i]['missile_ap_damage'] = 0
        all_units[i]['missile_base_damage'] = 0
        all_units[i]['range'] = 0
        all_units[i]['projectile_number'] = 0
        all_units[i]['calibration_area'] = 0
        all_units[i]['calibration_distance'] = 0
        all_units[i]['reload_time'] = 0
        all_units[i]['shots_per_volley'] = 0
        all_units[i]['missile_bonus_vs_infantry'] = 0
        all_units[i]['missile_bonus_vs_large'] = 0
        all_units[i]['missile_damage'] = 0

    if 'explosion_base_damage' in all_stats[i]:
        all_units[i]['explosion_base_damage'] = all_stats[i]['explosion_base_damage']
        all_units[i]['explosion_ap_damage'] = all_stats[i]['explosion_ap_damage']
        if all_stats[i]['explosion_contact_phase_effect'] == 'wh2_dlc14_unit_contact_poisoned_wind':
            all_units[i]['poisoned_wind'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh_dlc06_unit_contact_blinded':
            all_units[i]['blinded'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh_dlc06_unit_contact_sundered_armour':
            all_units[i]['missile_sundered_armour'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh2_dlc12_unit_contact_flammable':
            all_units[i]['flamable'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh_main_unit_contact_morale':
            all_units[i]['missile_burnt'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh2_dlc11_unit_contact_monstrous_impact':
            all_units[i]['monstrous_impact'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh_main_unit_contact_overhead_morale':
            all_units[i]['take_cover'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh2_dlc11_unit_contact_monstrous_impact':
            all_units[i]['monstrous_impact'] = True
        elif all_stats[i]['explosion_contact_phase_effect'] == 'wh2_main_unit_contact_plague_monk_censer_morale':
            all_units[i]['missile_contaminated'] = True


    else:
        all_units[i]['explosion_base_damage'] = 0
        all_units[i]['explosion_ap_damage'] = 0

    if all_stats[i]['fly_speed'] == 0:
        all_units[i]['speed'] = floor(int(all_stats[i]['run_speed']))
    else:
        all_units[i]['speed'] = int(all_stats[i]['fly_speed'])

    if '20' in all_stats[i]['shield'] or '25' in all_stats[i]['shield'] or '30' in all_stats[i]['shield'] or '35' in all_stats[i]['shield']:
        all_units[i]['bronze_shield'] = True
        all_units[i]['silver_shield'] = False
    elif '50' in all_stats[i]['shield'] or '55' in all_stats[i]['shield'] or '60' in all_stats[i]['shield']:
        all_units[i]['bronze_shield'] = False
        all_units[i]['silver_shield'] = True
    else:
        all_units[i]['bronze_shield'] = False
        all_units[i]['silver_shield'] = False

    if all_stats[i]['ap_damage'] > all_stats[i]['base_damage']:
        all_units[i]['melee_ap_yes_no'] = True

    if all_stats[i]['magical_attack'] > 0:
        all_units[i]['melee_magic_attack'] = True

    if all_stats[i]['melee_fire_attack'] > 0:
        all_units[i]['melee_fire_attack'] = True

    if 'poison' in all_stats[i]['contact_phase']:
        all_units[i]['melee_poison_attack'] = True
    elif 'weeping_blade' in all_stats[i]['contact_phase']:
        all_units[i]['weeping_blade'] = True
    elif 'monk' in all_stats[i]['contact_phase']:
        all_units[i]['contaminated'] = True
    elif 'disturbed' in all_stats[i]['contact_phase']:
        all_units[i]['disturbed'] = True
    elif 'charmed' in all_stats[i]['contact_phase']:
        all_units[i]['charmed'] = True
    elif 'frostbite' in all_stats[i]['contact_phase']:
        all_units[i]['frostbite'] = True
    elif 'sundered' in all_stats[i]['contact_phase']:
        all_units[i]['sundered_armour'] = True
    elif 'witch_elf_poison' in all_stats[i]['contact_phase']:
        all_units[i]['madness_of_khaine'] = True
    elif 'wh_main_unit_contact_morale' in all_stats[i]['contact_phase']:
        all_units[i]['melee_burnt'] = True


    if 'unit_card' in all_stats[i]:
        all_units[i]['unit_image'] = f"unit-cards/{all_stats[i]['unit_card']}.png"




def populate():
    high_elves = [
        ]
    dark_elves = [
        ]
    skaven = [
        ]
    vampire_coast = [
    ]

    for i in range(len(all_units)):
        if '_hef_' in all_units[i]['key']:
            high_elves.append(all_units[i])
        elif '_skv_' in all_units[i]['key']:
            skaven.append(all_units[i])
        elif '_cst_' in all_units[i]['key']:
            vampire_coast.append(all_units[i])

    races = {
             'Skaven': {'units':skaven},
                }


    # If you want to add more categories or pages,
    # add them to the dictionaries above.
    # The code below goes through the cats dictionary, then adds each category,
    # and then adds all the associated pages for that category.
    for race, race_data in races.items():
        r = add_race(race)
        for u in race_data['units']:
            add_unit(r, u['unit_name'], u['unit_image'], u['key'], u['category'], u['weight'], u['cost'], u['upkeep'], u['mp_cost'], u['health'], u['health_per_entity'], u['armour'], u['bronze_shield'], u['silver_shield'], u['parry_chance'], u['ward_save'], u['physical_resistance'], u['missile_resistance'],
             u['magic_resistance'], u['fire_resistance'], u['leadership'], u['speed'], u['melee_attack'], u['melee_fire_attack'], u['melee_magic_attack'], u['melee_poison_attack'], u['frostbite'], u['sundered_armour'],
             u['weeping_blade'], u['disturbed'], u['charmed'], u['contaminated'], u['melee_burnt'], u['attack_interval'], u['melee_defence'], u['weapon_strenght'], u['melee_ap_yes_no'], u['melee_bonus_large_yes_no'], u['melee_bonus_inf_yes_no'], u['base_damage'],
                     u['ap_damage'], u['bonus_vs_large'], u['bonus_vs_infantry'], u['charge_bonus'], u['ammunition'], u['missile_fire_attack'], u['missile_magic_attack'],
                     u['suppressed'], u['range'], u['missile_damage'], u['missile_ap_yes_no'], u['missile_bonus_large_yes_no'], u['missile_bonus_inf_yes_no'], u['missile_poison_attack'],
                     u['missile_sundered_armour'], u['zzzzap'], u['flammable'], u['blinded'], u['monstrous_impact'], u['missile_disturbed'], u['shieldbreaker'],
                     u['missile_burnt'], u['take_cover'], u['poisoned_wind'], u['madness_of_khaine'], u['missile_discouraged'], u['missile_contaminated'], u['missile_base_damage'], u['missile_ap_damage'], u['missile_bonus_vs_infantry'],
                     u['missile_bonus_vs_large'], u['explosion_base_damage'], u['explosion_ap_damage'], u['shot_per_volley'], u['projectile_number'], u['reload_time'], u['total_accuracy'], u['calibration_distance'], u['calibration_area'], u['fatigue_modifier'])

    # Print out the categories we have added.
    for r in Race.objects.all():
        for u in Unit.objects.filter(race=r):
            print('- {0} - {1}'.format(str(r), str(u)))


def add_unit(race, unit_name, unit_image, key, category, weight, cost, upkeep, mp_cost, health, health_per_entity, armour, bronze_shield, silver_shield, parry_chance, ward_save, physical_resistance, missile_resistance, magic_resistance,
             fire_resistance, leadership, speed, melee_attack, melee_fire_attack, melee_magic_attack, melee_poison_attack, frostbite, sundered_armour, weeping_blade, disturbed, charmed,
             contaminated, melee_burnt, attack_interval, melee_defence, weapon_strenght, melee_ap_yes_no, melee_bonus_large_yes_no, melee_bonus_inf_yes_no, base_damage, ap_damage, bonus_vs_large,
             bonus_vs_infantry, charge_bonus, ammunition, missile_fire_attack, missile_magic_attack, suppressed, range, missile_damage, missile_ap_yes_no, missile_bonus_large_yes_no,
             missile_bonus_inf_yes_no, missile_poison_attack, missile_sundered_armour, zzzzap, flammable, blinded, monstrous_impact, missile_disturbed, shieldbreaker, missile_burnt, take_cover, poisoned_wind, madness_of_khaine, missile_discouraged,
             missile_contaminated, missile_base_damage, missile_ap_damage, missile_bonus_vs_infantry, missile_bonus_vs_large, explosion_base_damage, explosion_ap_damage, shot_per_volley, projectile_number,
             reload_time, total_accuracy, calibration_distance, calibration_area, fatigue_modifier):
    u = Unit.objects.get_or_create(race=race, unit_name=unit_name, unit_image=unit_image, key=key, category=category, weight=weight, cost=cost, upkeep=upkeep, mp_cost=mp_cost, health=health, health_per_entity=health_per_entity, armour=armour, bronze_shield=bronze_shield,
   silver_shield=silver_shield, parry_chance=parry_chance, ward_save=ward_save, physical_resistance=physical_resistance, missile_resistance=missile_resistance, magic_resistance=magic_resistance,
   fire_resistance=fire_resistance, leadership=leadership, speed=speed, melee_attack=melee_attack, melee_fire_attack=melee_fire_attack, melee_magic_attack=melee_magic_attack, melee_poison_attack=melee_poison_attack,
   frostbite=frostbite, sundered_armour=sundered_armour, weeping_blade=weeping_blade, disturbed=disturbed, charmed=charmed, contaminated=contaminated, melee_burnt=melee_burnt, attack_interval=attack_interval, melee_defence=melee_defence,
   weapon_strenght=weapon_strenght, melee_ap_yes_no=melee_ap_yes_no, melee_bonus_large_yes_no=melee_bonus_large_yes_no, melee_bonus_inf_yes_no=melee_bonus_inf_yes_no, base_damage=base_damage, ap_damage=ap_damage,
   bonus_vs_large=bonus_vs_large, bonus_vs_infantry=bonus_vs_infantry,  charge_bonus=charge_bonus, ammunition=ammunition, missile_fire_attack=missile_fire_attack, missile_magic_attack=missile_magic_attack,
   suppressed=suppressed, range=range, missile_damage=missile_damage, missile_ap_yes_no=missile_ap_yes_no, missile_bonus_large_yes_no=missile_bonus_large_yes_no, missile_bonus_inf_yes_no=missile_bonus_inf_yes_no,
   missile_poison_attack=missile_poison_attack, missile_sundered_armour=missile_sundered_armour, zzzzap=zzzzap, flammable=flammable, blinded=blinded, monstrous_impact=monstrous_impact, missile_disturbed=missile_disturbed,
   shieldbreaker=shieldbreaker, missile_burnt=missile_burnt, take_cover=take_cover, poisoned_wind=poisoned_wind, madness_of_khaine=madness_of_khaine, missile_discouraged=missile_discouraged, missile_contaminated=missile_contaminated, missile_base_damage=missile_base_damage, missile_ap_damage=missile_ap_damage, missile_bonus_vs_infantry=missile_bonus_vs_infantry, missile_bonus_vs_large=missile_bonus_vs_large,
   explosion_base_damage=explosion_base_damage, explosion_ap_damage=explosion_ap_damage, shot_per_volley=shot_per_volley, projectile_number=projectile_number, reload_time=reload_time, total_accuracy=total_accuracy,
   calibration_distance=calibration_distance, calibration_area=calibration_area, fatigue_modifier=fatigue_modifier)[0]
    u.save()
    return u





def add_race(race_name):
    r = Race.objects.get_or_create(race_name=race_name)[0]
    r.save()
    return r

# Start execution here!
if __name__ == '__main__':
    populate()

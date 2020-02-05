import os
from xml.etree import ElementTree
from math import *

file_name = 'land_units.xml'
file_name2 = 'main_units.xml'
file_name3 = 'melee_weapons.xml'
file_name4 = 'unit_armour_types.xml'
file_name5 = 'projectiles.xml'
file_name6 = 'missile_weapons.xml'
file_name7 = 'projectiles_explosions.xml'
file_name8 = 'battle_entities.xml'
file_name9 = 'unit_shield_types.xml'
file_name10 = 'mounts.xml'
file_name11 = 'battlefield_engines.xml'
file_name12 = 'unit_variants.xml'
file_name13 = 'units_custom_battle_permissions.xml'
file_name14 = 'unit_description_short_texts.xml'

full_file = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name))
full_file2 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name2))
full_file3 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name3))
full_file4 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name4))
full_file5 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name5))
full_file6 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name6))
full_file7 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name7))
full_file8 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name8))
full_file9 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name9))
full_file10 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name10))
full_file11 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name11))
full_file12 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name12))
full_file13 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name13))
full_file14 = os.path.abspath(os.path.join('warhammerwiki\static\warhammerwiki', file_name14))

dom_land_units = ElementTree.parse(full_file)
dom_main_units = ElementTree.parse(full_file2)
dom_melee_weapon = ElementTree.parse(full_file3)
dom_unit_armour_types = ElementTree.parse((full_file4))
dom_projectiles = ElementTree.parse((full_file5))
dom_missile_weapon = ElementTree.parse(full_file6)
dom_projectiles_explosions = ElementTree.parse(full_file7)
dom_battle_entities = ElementTree.parse(full_file8)
dom_unit_shield_types = ElementTree.parse(full_file9)
dom_mounts = ElementTree.parse(full_file10)
dom_engines = ElementTree.parse(full_file11)
dom_unit_variants = ElementTree.parse(full_file12)
dom_units_custom_battle_permissions = ElementTree.parse(full_file13)
dom_unit_description = ElementTree.parse(full_file14)

land_units = dom_land_units.getroot()
main_units = dom_main_units.getroot()
melee_weapon = dom_melee_weapon.getroot()
unit_armour_types = dom_unit_armour_types.getroot()
projectiles = dom_projectiles.getroot()
missile_weapons = dom_missile_weapon.getroot()
projectiles_explosions = dom_projectiles_explosions.getroot()
battle_entities = dom_battle_entities.getroot()
unit_shield_types = dom_unit_shield_types.getroot()
mounts = dom_mounts.getroot()
engines = dom_engines.getroot()
unit_variants = dom_unit_variants.getroot()
units_custom_battle_permissions = dom_units_custom_battle_permissions.getroot()
unit_description = dom_unit_description.getroot()

main_units_list = []
land_units_list = []
melee_weapon_list = []
unit_armour_types_list = []
projectiles_list = []
missile_weapons_list = []
projectile_shrapnels_list = []
projectiles_explosions_list = []
battle_entities_list = []
unit_shield_types_list = []
mounts_list = []
units_custom_battle_permissions_list = []
lord_portraits_list = []
engines_list = []
unit_variants_list = []
artilery_list = []
unit_description_list = []

all_stats = []


for mu in main_units.findall('main_units'):
    land_unit = mu.find('land_unit').text
    unit = mu.find('unit').text
    category = mu.find('caste').text
    is_naval = int(mu.find('is_naval').text)
    num_men = int(mu.find('num_men').text)
    recruitment_cost = mu.find('recruitment_cost').text
    upkeep = mu.find('upkeep_cost').text
    multiplayer_cost = mu.find('multiplayer_cost').text
    weight = mu.find('weight').text
    main_units_list.append({'land_unit':land_unit, 'recruitment_cost':recruitment_cost, 'upkeep':upkeep, 'multiplayer_cost':multiplayer_cost, 'weight':weight, 'num_men':num_men, 'unit':unit, 'category':category, 'is_naval':is_naval})


for lu in land_units.findall('land_units'):
    unit_name = lu.find('onscreen_name').text
    key = lu.find('key').text
    man_entity = lu.find('man_entity').text
    ammo = lu.find('primary_ammo').text
    accuracy = lu.find('accuracy').text
    num_engines = int(lu.find('num_engines').text)
    engine = lu.find('engine').text
    num_mounts = int(lu.find('num_mounts').text)
    mount = lu.find('mount').text
    bonus_hit_points = int(lu.find('bonus_hit_points').text)
    reload = float(lu.find('reload').text)
    fire_resistance = lu.find('damage_mod_flame').text
    magic_resistance = lu.find('damage_mod_magic').text
    missile_resistance = lu.find('damage_mod_missile').text
    physical_resistance = lu.find('damage_mod_physical').text
    ward_save = lu.find('damage_mod_all').text
    melee_attack = lu.find('melee_attack').text
    category = lu.find('category').text
    charge_bonus = lu.find('charge_bonus').text
    melee_defence = lu.find('melee_defence').text
    leadership = lu.find('morale').text
    shield = lu.find('shield').text
    land_unit_armour = lu.find('armour').text
    primary_melee_weapon = lu.find('primary_melee_weapon').text
    primary_missile_weapon = lu.find('primary_missile_weapon').text
    land_units_list.append({'unit_name':unit_name, 'key':key, 'melee_attack':melee_attack, 'melee_defence': melee_defence,
                  'shield':shield, 'charge_bonus':charge_bonus, 'leadership':leadership,
                            'primary_melee_weapon':primary_melee_weapon, 'land_unit_armour':land_unit_armour, 'primary_missile_weapon':primary_missile_weapon, 'man_entity':man_entity,
                            'ammo':ammo, 'accuracy':accuracy, 'fire_resistance':fire_resistance, 'magic_resistance':magic_resistance, 'missile_resistance':missile_resistance,
                            'physical_resistance':physical_resistance, 'ward_save':ward_save, 'num_engines':num_engines, 'bonus_hit_points':bonus_hit_points, 'engine':engine,
                            'num_mounts':num_mounts, 'mount':mount, 'reload':reload})



for mw in melee_weapon.findall('melee_weapons'):
    weapon_key = mw.find('key').text
    base_damage = int(mw.find('damage').text)
    ap_damage = int(mw.find('ap_damage').text)
    bonus_vs_infantry = int(mw.find('bonus_v_infantry').text)
    bonus_vs_large = int(mw.find('bonus_v_large').text)
    melee_attack_interval = mw.find('melee_attack_interval').text
    magical_attack = int(mw.find('is_magical').text)
    contact_phase = mw.find('contact_phase').text
    melee_fire_attack = int(mw.find('ignition_amount').text)
    melee_weapon_list.append({'weapon_key':weapon_key, 'weapon_damage':base_damage+ap_damage, 'base_damage':base_damage, 'ap_damage':ap_damage,
                  'bonus_vs_large':bonus_vs_large, 'bonus_vs_infantry':bonus_vs_infantry, 'melee_attack_interval':melee_attack_interval,
                              'magical_attack':magical_attack, 'contact_phase':contact_phase, 'melee_fire_attack':melee_fire_attack})



for ar in unit_armour_types.findall('unit_armour_types'):
    armour = ar.find('armour_value').text
    armour_key = ar.find('key').text
    unit_armour_types_list.append({'armour':armour, 'armour_key':armour_key})


for pr in projectiles.findall('projectiles'):
    explosion_type = pr.find('explosion_type').text
    projectiles_key = pr.find('key').text
    missile_ap_damage = int(pr.find('ap_damage').text)
    missile_base_damage = int(pr.find('damage').text)
    range = pr.find('effective_range').text
    projectile_number = pr.find('projectile_number').text
    calibration_area = pr.find('calibration_area').text
    calibration_distance = pr.find('calibration_distance').text
    reload_time = pr.find('base_reload_time').text
    missile_bonus_vs_infantry = int(pr.find('bonus_v_infantry').text)
    missile_bonus_vs_large = int(pr.find('bonus_v_large').text)
    shots_per_volley = pr.find('shots_per_volley').text
    missile_magic_attack = int(pr.find('is_magical').text)
    missile_fire_attack = int(pr.find('ignition_amount').text)
    contact_stat_effect = pr.find('contact_stat_effect').text
    projectiles_list.append({'missile_ap_damage':missile_ap_damage, 'projectiles_key':projectiles_key, 'missile_base_damage':missile_base_damage, 'range':range, 'projectile_number':projectile_number,
                  'calibration_area':calibration_area, 'calibration_distance':calibration_distance, 'reload_time':reload_time, 'shots_per_volley':shots_per_volley,
                  'missile_bonus_vs_infantry':missile_bonus_vs_infantry, 'missile_bonus_vs_large': missile_bonus_vs_large, 'explosion_type':explosion_type, 'missile_magic_attack':missile_magic_attack,
                             'missile_fire_attack':missile_fire_attack, 'contact_stat_effect':contact_stat_effect})




for ms in missile_weapons.findall('missile_weapons'):
    missile_weapon = ms.find('key').text
    default_projectile = ms.find('default_projectile').text
    missile_weapons_list.append({'missile_weapon':missile_weapon, 'default_projectile':default_projectile})



for pe in projectiles_explosions.findall('projectiles_explosions'):
    projectiles_explosions_key = pe.find('key').text
    projectiles_explosions_shrapnel = pe.find('shrapnel').text
    explosion_base_damage = int(pe.find('detonation_damage').text)
    explosion_ap_damage = int(pe.find('detonation_damage_ap').text)
    explosion_contact_phase_effect = pe.find('contact_phase_effect').text
    projectiles_explosions_list.append({'projectiles_explosions_shrapnel':projectiles_explosions_shrapnel, 'explosion_base_damage':explosion_base_damage,
                                        'explosion_ap_damage':explosion_ap_damage, 'projectiles_explosions_key':projectiles_explosions_key, 'explosion_contact_phase_effect':explosion_contact_phase_effect})



for en in battle_entities.findall('battle_entities'):
    battle_entities_key = en.find('key').text
    run_speed = en.find('run_speed').text
    fly_speed = en.find('fly_speed').text
    battle_entities_hit_points = int(en.find('hit_points').text)
    run_speed = int(round(float(run_speed), 2)*10)
    fly_speed = int(round(float(fly_speed), 2)*10)
    battle_entities_list.append({'battle_entities_key':battle_entities_key, 'run_speed':run_speed, 'fly_speed':fly_speed, 'battle_entities_hit_points':battle_entities_hit_points})


for var in unit_variants.findall('unit_variants'):
    unit_variants_key = var.find('unit').text
    unit_card = var.find('unit_card').text
    unit_variants_list.append({'unit_variants_key':unit_variants_key, 'unit_card':unit_card})


for per in units_custom_battle_permissions.findall('units_custom_battle_permissions'):
    units_custom_battle_permissions_unit_key = per.find('unit').text
    units_custom_battle_permissions_lord_portrait = per.find('general_portrait').text
    units_custom_battle_permissions_list.append({'units_custom_battle_permissions_unit_key':units_custom_battle_permissions_unit_key, 'units_custom_battle_permissions_lord_portrait':units_custom_battle_permissions_lord_portrait})

for sh in unit_shield_types.findall('unit_shield_types'):
    unit_shield_key = sh.find('key').text
    missile_block_chance = sh.find('missile_block_chance').text
    unit_shield_types_list.append({'unit_shield_key':unit_shield_key, 'missile_block_chance':missile_block_chance})



for mnt in mounts.findall('mounts'):
    mount_key = mnt.find('key').text
    mount_entity = mnt.find('entity').text
    mounts_list.append({'mount_key':mount_key, 'mount_entity':mount_entity})


for eng in engines.findall('battlefield_engines'):
    engine_key = eng.find('key').text
    engine_missile_weapon = eng.find('missile_weapon').text
    engine_battle_entity = eng.find('battle_entity').text
    engines_list.append({'engine_key':engine_key, 'engine_battle_entity':engine_battle_entity, 'engine_missile_weapon':engine_missile_weapon})


for ud in unit_description.findall('unit_description_short_texts'):
    unit_description_key = ud.find('key').text
    unit_description_text = ud.find('text').text
    unit_description_list.append({'unit_description_key':unit_description_key, 'unit_description_text':unit_description_text})


for i in main_units_list:
    for x in land_units_list:
        if i['land_unit'] == x['key']:
            x.update(i)
            all_stats.append(x)

for i in all_stats:
    for z in melee_weapon_list:
        if i['primary_melee_weapon'] == z['weapon_key']:
            i.update(z)

for i in all_stats:
    for x in unit_armour_types_list:
        if i['land_unit_armour'] == x['armour_key']:
            i.update(x)


for p in projectiles_list:
    for m in missile_weapons_list:
        if m['default_projectile'] == p['projectiles_key']:
            m.update(p)


for i in all_stats:
    for m in missile_weapons_list:
        if i['primary_missile_weapon'] == m['missile_weapon']:
          i.update(m)



for i in engines_list:
    z = {}
    for x in missile_weapons_list:
        if i['engine_missile_weapon'] != None:
            if x['missile_weapon'] == i['engine_missile_weapon']:
                z.update(i)
                z.update(x)
                artilery_list.append(z)


for i in artilery_list:
    for x in projectiles_list:
        if i['default_projectile'] == x['projectiles_key']:
            i.update(x)

for i in artilery_list:
    for x in projectiles_explosions_list:
        if i['explosion_type'] == x['projectiles_explosions_key']:
            i.update(x)

for i in artilery_list:
    for x in land_units_list:
        if i['engine_key'] == x['engine']:
            i.update(x)



for i in all_stats:
    for x in projectiles_explosions_list:
        if 'explosion_type' in i:
            if i['explosion_type'] == x['projectiles_explosions_key']:
                i.update(x)

for i in all_stats:
    for x in artilery_list:
        if 'unit_name' in x:
            if i['unit_name'] == x['unit_name']:
                i.update(x)


for i in all_stats:
    for x in battle_entities_list:
        if i['man_entity'] == x['battle_entities_key']:
            i.update(x)


for i in all_stats:
    for x in unit_shield_types_list:
        if i['shield'] == x['unit_shield_key']:
            i.update(x)



for i in mounts_list:
    for x in battle_entities_list:
        if i['mount_entity'] == x['battle_entities_key']:
            i['mount_entity_hp'] = x['battle_entities_hit_points']

for i in engines_list:
    for x in battle_entities_list:
        if i['engine_battle_entity'] == x['battle_entities_key']:
            i['engine_hp'] = x['battle_entities_hit_points']


for i in all_stats:
    for x in mounts_list:
        if i['mount'] == x['mount_key']:
            i.update(x)


for i in all_stats:
    for x in engines_list:
        if i['engine'] == x['engine_key']:
            i.update(x)



for i in all_stats:
    engine_count = i['num_engines']
    engine_hp = i['engine_hp'] if 'engine_hp' in i else 0

    engine_hp_unchanged = engine_hp

    mount_count = i['num_mounts'] * engine_count if engine_count > 0 else i['num_mounts']
    mount_hp = i['mount_entity_hp'] if 'mount_entity_hp' in i else 0

    unit_count = i['num_men']
    unit_hp = i['battle_entities_hit_points']

    bonus = i['bonus_hit_points']
    if engine_count > 0:
        engine_hp += bonus
        if mount_count > 0:
            engine_hp += engine_hp_unchanged
        elif unit_count > 1:
            if engine_count > 1 and engine_count != unit_count:
                unit_hp += bonus
    elif mount_count > 0:
        mount_hp += bonus
    else:
        unit_hp += bonus


    hp = unit_count * unit_hp + mount_count * mount_hp + engine_count * engine_hp

    i['hp'] = hp



for i in all_stats:
    if 'reload_time' in i:
        i['real_reload_time'] = round(float(i['reload_time'])*(1.0 - i['reload']/100), 2)




for i in all_stats:
    if 'missile_base_damage' in i and 'explosion_ap_damage' not in i:
        i['missile_damage'] = ceil((i['missile_base_damage'] + i['missile_ap_damage']) * float(i['shots_per_volley']) * float(i['projectile_number']) * 10 /i['real_reload_time'])
    elif 'missile_base_damage' in i and 'explosion_ap_damage' in i:
        i['missile_damage'] = ceil((i['missile_base_damage'] + i['missile_ap_damage'] + i['explosion_base_damage'] + i['explosion_ap_damage']) * float(i['shots_per_volley']) * float(i['projectile_number']) * 10 / i['real_reload_time'])


for i in all_stats:
    if i['contact_phase'] == None:
        i['contact_phase'] = 'none'


for i in all_stats:
    if 'contact_stat_effect' in i:
        if i['contact_stat_effect'] == None:
            i['contact_stat_effect'] = 'none'


for i in all_stats:
    if 'explosion_contact_phase_effect' in i:
        if i['explosion_contact_phase_effect'] == None:
            i['explosion_contact_phase_effect'] = 'none'


for i in all_stats:
    for x in battle_entities_list:
        if 'engine_battle_entity' in i:
            if i['engine_battle_entity'] == x['battle_entities_key']:
                i['run_speed'] = x['run_speed']
                i['fly_speed'] = x['fly_speed']
                i['battle_entities_hit_points'] = x['battle_entities_hit_points']



for i in all_stats:
    for x in battle_entities_list:
        if 'mount_entity' in i:
            if i['mount_entity'] == x['battle_entities_key']:
                i['run_speed'] = x['run_speed']
                i['fly_speed'] = x['fly_speed']
                i['battle_entities_hit_points'] = x['battle_entities_hit_points']


for i in all_stats:
    if i['num_engines'] == 0 and i['num_mounts'] == 0:
        i['health_per_entity'] = i['hp'] // i['num_men']
    elif i['num_engines'] > 0:
        i['health_per_entity'] = i['hp'] // i['num_engines']
    elif i['num_mounts'] > 0 and i['num_engines'] == 0:
        i['health_per_entity'] = i['hp'] // i['num_mounts']

for i in all_stats:
    for x in unit_variants_list:
        if i['key'] == x['unit_variants_key']:
            i.update(x)


for i in units_custom_battle_permissions_list:
            portrait_key = i['units_custom_battle_permissions_unit_key']
            portrait = i['units_custom_battle_permissions_lord_portrait']
            p_list = []
            if portrait != None:
                for i in portrait:
                    p_list.append(i)
                if '/' in p_list:
                    p_list= p_list[p_list.index('/')+1:-1]
                    if '/' in p_list:
                        p_list = p_list[p_list.index('/') + 1:-1]
                        if '/' in p_list:
                            p_list = p_list[p_list.index('/') + 1:-1]
                            if '/' in p_list:
                                p_list = p_list[p_list.index('/') + 1:-1]
                portrait = ''.join(p_list)
                lord_portraits_list.append({'portrait_key':portrait_key, 'unit_card':portrait})

for i in all_stats:
    for x in lord_portraits_list:
        if i['key'] == x['portrait_key']:
            i['unit_card'] = x['unit_card']


tiktaqto = ''

for i in all_stats:
    if i['unit_name'] == "Tiktaq'to":
        tiktaqto = i


dublicate_list = []
all_stats_copy = all_stats.copy()
chosen_list = []
name_list = []
key_list = []

for i in all_stats_copy:
    if i['is_naval'] == 1:
        all_stats.remove(i)
    elif '_summoned' in i['key']:
        all_stats.remove(i)
    elif '_boss' in i['key']:
        all_stats.remove(i)
    elif '_ksl' in i['key']:
        all_stats.remove(i)
    elif '_teb' in i['key']:
        all_stats.remove(i)
    elif '_qb' in i['key']:
        all_stats.remove(i)

for i in all_stats:
    for x in all_stats:
        if i['unit_name'] == x['unit_name'] and i['key'] != x['key']:
            dublicate_list.append({'key':x['key'], 'name':x['unit_name']})


for i in dublicate_list:
    if '_0' in i['key']:
        chosen_list.append(i)

for i in chosen_list:
    if i['name'] not in name_list:
        name_list.append(i['name'])
        key_list.append(i['key'])

dublicate_list_copy = dublicate_list.copy()

for i in dublicate_list_copy:
    for x in key_list:
        if i['key'] == x:
            dublicate_list.remove(i)


for i in all_stats_copy:
    for x in dublicate_list:
        if i['key'] == x['key']:
            if i in all_stats:
                all_stats.remove(i)


for i in all_stats_copy:
    if i['unit_name'] == "Tiktaq'to":
        all_stats.remove(i)
        all_stats.append(tiktaqto)


for i in all_stats:
    if 'lzd' in i['key']:
        print(i)
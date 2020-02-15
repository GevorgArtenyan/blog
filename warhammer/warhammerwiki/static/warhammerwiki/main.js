$( document ).ready(function() {
    $(function() {
    $('[data-tooltip]').tooltip();
  });
});


var btn = document.getElementById('btn')
var container = document.getElementById('ourcontainer')
var url = 'http://127.0.0.1:8000/api/'

$.ajax({
    method: 'GET',
    url: url,
    success: function(data) {
        console.log(data)
        console.log('success')
    },
    error: function(error_data) {
        console.log('error')
    }
})

$('.unit').change(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", url);
    ourRequest.onload = function(){
        var OurData = JSON.parse(ourRequest.responseText);
        renderHTML(OurData);
        if ($('#unit_name').text() == 'name'){
           $('#all_stats').hide()
        } else {
           $('#all_stats').show()
        }
        if ($('#unit_name2').text() == 'name'){
           $('#all_stats2').hide()
        } else {
           $('#all_stats2').show()
        }
    }
    ourRequest.send()
});


    function renderHTML(data) {
        var displayunit = $('.unit option:selected').not('#default').text();
        var htmlString = "";
        for (i=0; i < data.length; i++){
            if (displayunit == data[i].unit_name) {
                htmlString += "<p>Name: "  + data[i].cost + "</p>" ;
            var unit_stats = document.getElementById("unit_stats");
                var image = "<img src="+ data[i].unit_image + ">"
                $('.hide_image').hide()
                document.getElementById("image-section").innerHTML=image;
                document.getElementById("unit_name").innerHTML=data[i].unit_name;
                document.getElementById("unit_cost").innerHTML=data[i].cost;
                document.getElementById("unit_upkeep").innerHTML=data[i].upkeep;
                document.getElementById("unit_mp_cost").innerHTML=data[i].mp_cost;
                document.getElementById("unit_health").innerHTML=data[i].health;
                document.getElementById("unit_health_per_entity").innerHTML=data[i].health_per_entity;
                if (data[i].bronze_shield) {
                    document.getElementById('bronze_shield').style.display = 'block';
                    $('#bronze_shield').attr('data-original-title', (data[i].parry_chance).toString() + '% chance to block front missile attacks')
                }
                if (data[i].silver_shield) {
                    document.getElementById('silver_shield').style.display = 'block';
                    $('#silver_shield').attr('data-original-title', (data[i].parry_chance).toString() + '% chance to block front missile attacks')
                }
                document.getElementById("unit_armour").innerHTML=data[i].armour;
                document.getElementById("unit_parry_chance").innerHTML=data[i].parry_chance;
                document.getElementById("unit_ward_save").innerHTML=data[i].ward_save;
                document.getElementById("unit_physical_resistance").innerHTML=data[i].physical_resistance;
                document.getElementById("unit_missile_resistance").innerHTML=data[i].missile_resistance;
                document.getElementById("unit_magic_resistance").innerHTML=data[i].magic_resistance;
                document.getElementById("unit_fire_resistance").innerHTML=data[i].fire_resistance;
                document.getElementById("unit_leadership").innerHTML=data[i].leadership;
                document.getElementById("unit_speed").innerHTML=data[i].speed;
                if (data[i].melee_fire_attack) {
                    document.getElementById('melee_fire_attack').style.display = 'block';
                }
                if (data[i].melee_magic_attack) {
                    document.getElementById('melee_magic_attack').style.display = 'block';
                }
                if (data[i].melee_poison_attack) {
                    document.getElementById('melee_poison_attack').style.display = 'block';
                }
                if (data[i].frostbite) {
                    document.getElementById('frostbite').style.display = 'block';
                }
                if (data[i].sundered_armour) {
                    document.getElementById('sundered_armour').style.display = 'block';
                }
                if (data[i].weeping_blade) {
                    document.getElementById('weeping_blade').style.display = 'block';
                }
                if (data[i].disturbed) {
                    document.getElementById('disturbed').style.display = 'block';
                }
                if (data[i].charmed) {
                    document.getElementById('charmed').style.display = 'block';
                }
                if (data[i].contaminated) {
                    document.getElementById('contaminated').style.display = 'block';
                }
                if (data[i].madness_of_khaine) {
                    document.getElementById('madness_of_khaine').style.display = 'block';
                }
                if (data[i].melee_burnt) {
                    document.getElementById('melee_burnt').style.display = 'block';
                }
                document.getElementById("unit_melee_attack").innerHTML=data[i].melee_attack;
                document.getElementById("unit_attack_interval").innerHTML=data[i].attack_interval;
                document.getElementById("unit_melee_defence").innerHTML=data[i].melee_defence;
                if (data[i].melee_ap_yes_no) {
                    document.getElementById('ap_damage').style.display = 'block';
                }
                if (data[i].melee_bonus_large_yes_no) {
                    document.getElementById('bonus_vs_large').style.display = 'block';
                }
                if (data[i].melee_bonus_inf_yes_no) {
                    document.getElementById('bonus_vs_inf').style.display = 'block';
                }
                document.getElementById("unit_weapon_strength").innerHTML=data[i].weapon_strenght;
                document.getElementById("unit_base_damage").innerHTML=data[i].base_damage;
                document.getElementById("unit_ap_damage").innerHTML=data[i].ap_damage;
                document.getElementById("unit_bonus_vs_large").innerHTML=data[i].bonus_vs_large;
                document.getElementById("unit_bonus_vs_infantry").innerHTML=data[i].bonus_vs_infantry;
                document.getElementById("unit_charge_bonus").innerHTML=data[i].charge_bonus;
                if (data[i].missile_fire_attack) {
                    document.getElementById('missile_fire_attack').style.display = 'block';
                }
                if (data[i].missile_magic_attack) {
                    document.getElementById('missile_magic_attack').style.display = 'block';
                }
                if (data[i].suppressed) {
                    document.getElementById('suppressed').style.display = 'block';
                    }
                document.getElementById("unit_ammunition").innerHTML=data[i].ammunition;
                document.getElementById("unit_range").innerHTML=data[i].range;
                if (data[i].missile_ap_yes_no) {
                    document.getElementById('missile_ap_yes_no').style.display = 'block';
                    }
                if (data[i].missile_bonus_large_yes_no) {
                    document.getElementById('missile_bonus_large_yes_no').style.display = 'block';
                    }
                if (data[i].missile_bonus_inf_yes_no) {
                    document.getElementById('missile_bonus_inf_yes_no').style.display = 'block';
                    }
                if (data[i].missile_poison_attack) {
                    document.getElementById('missile_poison_attack').style.display = 'block';
                    }
                if (data[i].missile_sundered_armour) {
                    document.getElementById('missile_sundered_armour').style.display = 'block';
                    }
                if (data[i].zzzzap) {
                    document.getElementById('zzzzap').style.display = 'block';
                    }
                if (data[i].flammable) {
                    document.getElementById('flammable').style.display = 'block';
                    }
                if (data[i].blinded) {
                    document.getElementById('blinded').style.display = 'block';
                    }
                if (data[i].monstrous_impact) {
                    document.getElementById('monstrous_impact').style.display = 'block';
                    }
                if (data[i].missile_disturbed) {
                    document.getElementById('missile_disturbed').style.display = 'block';
                    }
                if (data[i].shieldbreaker) {
                    document.getElementById('shieldbreaker').style.display = 'block';
                    }
                if (data[i].missile_burnt) {
                    document.getElementById('missile_burnt').style.display = 'block';
                    }
                if (data[i].take_cover) {
                    document.getElementById('take_cover').style.display = 'block';
                    }
                if (data[i].missile_discouraged) {
                    document.getElementById('missile_discouraged').style.display = 'block';
                    }
                if (data[i].poisoned_wind) {
                    document.getElementById('poisoned_wind').style.display = 'block';
                    }
                if (data[i].missile_contaminated) {
                    document.getElementById('missile_contaminated').style.display = 'block';
                    }
                document.getElementById("unit_missile_damage").innerHTML=data[i].missile_damage;
                document.getElementById("unit_missile_base_damage").innerHTML=data[i].missile_base_damage;
                document.getElementById("unit_missile_ap_damage").innerHTML=data[i].missile_ap_damage;
                document.getElementById("unit_missile_bonus_vs_infantry").innerHTML=data[i].missile_bonus_vs_infantry;
                document.getElementById("unit_missile_bonus_vs_large").innerHTML=data[i].missile_bonus_vs_large;
                document.getElementById("unit_explosion_base_damage").innerHTML=data[i].explosion_base_damage;
                document.getElementById("unit_explosion_ap_damage").innerHTML=data[i].explosion_ap_damage;
                document.getElementById("unit_shot_per_volley").innerHTML=data[i].shot_per_volley;
                document.getElementById("unit_projectile_number").innerHTML=data[i].projectile_number;
                document.getElementById("unit_reload_time").innerHTML=data[i].reload_time;
                document.getElementById("unit_total_accuracy").innerHTML=data[i].total_accuracy;
                document.getElementById("unit_calibration_distance").innerHTML=data[i].calibration_distance;
                document.getElementById("unit_calibration_area").innerHTML=data[i].calibration_area;
                document.getElementById("unit_fatigue_modifier").innerHTML=data[i].fatigue_modifier;
                if (data[i].ammunition == 0) {
                document.getElementById('ammo_box').style.display = 'none';
                document.getElementById('range_box').style.display = 'none';
                document.getElementById('missile_damage_box').style.display = 'none';
                } else {
                document.getElementById('ammo_box').style.display = 'block';
                document.getElementById('range_box').style.display = 'block';
                document.getElementById('missile_damage_box').style.display = 'block';
                }
            };
        };
                compareUnits()
        };


$(function(){
    $('#race').change(function() {
    $('.unit').find('#default').prop('selected', true)
    var displayrace = $('#race option:selected').text();
    var all_unit_choices = '.unit_choice';
    var race_id = $('#race option:selected').attr('id');
    race_id = race_id.slice(0, -1)
    $(all_unit_choices).hide();
    $('#'+race_id).show();
});
});


$('.unit2').change(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", url);
    ourRequest.onload = function(){
        var OurData = JSON.parse(ourRequest.responseText);
        renderHTML2(OurData);
        $('#all_stats2').show()
    }
    ourRequest.send()
});


function renderHTML2(data) {
    var displayunit2 = $('.unit2 option:selected').not('#default2').text();
    var htmlString2 = "";
    for (i=0; i < data.length; i++){
        if (displayunit2 == data[i].unit_name) {
            htmlString2 += "<p>Name: "  + data[i].cost + "</p>" ;
        var unit_stats2 = document.getElementById("unit_stats2");
            var image2 = "<img src="+ data[i].unit_image + ">"
            $('.hide_image2').hide()
            document.getElementById("image-section2").innerHTML=image2;
            document.getElementById("unit_name2").innerHTML=data[i].unit_name;
            document.getElementById("unit_cost2").innerHTML=data[i].cost;
            document.getElementById("unit_upkeep2").innerHTML=data[i].upkeep;
            document.getElementById("unit_mp_cost2").innerHTML=data[i].mp_cost;
            document.getElementById("unit_health2").innerHTML=data[i].health;
            document.getElementById("unit_health_per_entity2").innerHTML=data[i].health_per_entity;
            if (data[i].bronze_shield) {
                document.getElementById('bronze_shield2').style.display = 'block';
                $('#bronze_shield2').attr('data-original-title', (data[i].parry_chance).toString() + '% chance to block front missile attacks')
            }
            if (data[i].silver_shield) {
                document.getElementById('silver_shield2').style.display = 'block';
                $('#silver_shield2').attr('data-original-title', (data[i].parry_chance).toString() + '% chance to block front missile attacks')
            }
            document.getElementById("unit_armour2").innerHTML=data[i].armour;
            document.getElementById("unit_parry_chance2").innerHTML=data[i].parry_chance;
            document.getElementById("unit_ward_save2").innerHTML=data[i].ward_save;
            document.getElementById("unit_physical_resistance2").innerHTML=data[i].physical_resistance;
            document.getElementById("unit_missile_resistance2").innerHTML=data[i].missile_resistance;
            document.getElementById("unit_magic_resistance2").innerHTML=data[i].magic_resistance;
            document.getElementById("unit_fire_resistance2").innerHTML=data[i].fire_resistance;
            document.getElementById("unit_leadership2").innerHTML=data[i].leadership;
            document.getElementById("unit_speed2").innerHTML=data[i].speed;
            if (data[i].melee_fire_attack) {
                document.getElementById('melee_fire_attack2').style.display = 'block';
            }
            if (data[i].melee_magic_attack) {
                document.getElementById('melee_magic_attack2').style.display = 'block';
            }
            if (data[i].melee_poison_attack) {
                document.getElementById('melee_poison_attack2').style.display = 'block';
            }
            if (data[i].frostbite) {
                document.getElementById('frostbite2').style.display = 'block';
            }
            if (data[i].sundered_armour) {
                document.getElementById('sundered_armour2').style.display = 'block';
            }
            if (data[i].weeping_blade) {
                document.getElementById('weeping_blade2').style.display = 'block';
            }
            if (data[i].disturbed) {
                document.getElementById('disturbed2').style.display = 'block';
            }
            if (data[i].charmed) {
                document.getElementById('charmed2').style.display = 'block';
            }
            if (data[i].contaminated) {
                document.getElementById('contaminated2').style.display = 'block';
            }
            if (data[i].madness_of_khaine) {
                document.getElementById('madness_of_khaine2').style.display = 'block';
            }
            if (data[i].melee_burnt) {
                document.getElementById('melee_burnt2').style.display = 'block';
            }
            document.getElementById("unit_melee_attack2").innerHTML=data[i].melee_attack;
            document.getElementById("unit_attack_interval2").innerHTML=data[i].attack_interval;
            document.getElementById("unit_melee_defence2").innerHTML=data[i].melee_defence;
            if (data[i].melee_ap_yes_no) {
                document.getElementById('ap_damage2').style.display = 'block';
            }
            if (data[i].melee_bonus_large_yes_no) {
                document.getElementById('bonus_vs_large2').style.display = 'block';
            }
            if (data[i].melee_bonus_inf_yes_no) {
                document.getElementById('bonus_vs_inf2').style.display = 'block';
            }
            document.getElementById("unit_weapon_strength2").innerHTML=data[i].weapon_strenght;
            document.getElementById("unit_base_damage2").innerHTML=data[i].base_damage;
            document.getElementById("unit_ap_damage2").innerHTML=data[i].ap_damage;
            document.getElementById("unit_bonus_vs_large2").innerHTML=data[i].bonus_vs_large;
            document.getElementById("unit_bonus_vs_infantry2").innerHTML=data[i].bonus_vs_infantry;
            document.getElementById("unit_charge_bonus2").innerHTML=data[i].charge_bonus;
            if (data[i].missile_fire_attack) {
                document.getElementById('missile_fire_attack2').style.display = 'block';
            }
            if (data[i].missile_magic_attack) {
                document.getElementById('missile_magic_attack2').style.display = 'block';
            }
            if (data[i].suppressed) {
                document.getElementById('suppressed2').style.display = 'block';
                }
            document.getElementById("unit_ammunition2").innerHTML=data[i].ammunition;
            document.getElementById("unit_range2").innerHTML=data[i].range;
            if (data[i].missile_ap_yes_no) {
                document.getElementById('missile_ap_yes_no2').style.display = 'block';
                }
            if (data[i].missile_bonus_large_yes_no) {
                document.getElementById('missile_bonus_large_yes_no2').style.display = 'block';
                }
            if (data[i].missile_bonus_inf_yes_no) {
                document.getElementById('missile_bonus_inf_yes_no2').style.display = 'block';
                }
            if (data[i].missile_poison_attack) {
                document.getElementById('missile_poison_attack2').style.display = 'block';
                }
            if (data[i].missile_sundered_armour) {
                document.getElementById('missile_sundered_armour2').style.display = 'block';
                }
            if (data[i].zzzzap) {
                document.getElementById('zzzzap2').style.display = 'block';
                }
            if (data[i].flammable) {
                document.getElementById('flammable2').style.display = 'block';
                }
            if (data[i].blinded) {
                document.getElementById('blinded2').style.display = 'block';
                }
            if (data[i].monstrous_impact) {
                document.getElementById('monstrous_impact2').style.display = 'block';
                }
            if (data[i].missile_disturbed) {
                document.getElementById('missile_disturbed2').style.display = 'block';
                }
            if (data[i].shieldbreaker) {
                document.getElementById('shieldbreaker2').style.display = 'block';
                }
            if (data[i].missile_burnt) {
                document.getElementById('missile_burnt2').style.display = 'block';
                }
            if (data[i].take_cover) {
                document.getElementById('take_cover2').style.display = 'block';
                }
            if (data[i].missile_discouraged) {
                document.getElementById('missile_discouraged2').style.display = 'block';
                }
            if (data[i].poisoned_wind) {
                document.getElementById('poisoned_wind2').style.display = 'block';
                }
            if (data[i].missile_contaminated) {
                document.getElementById('missile_contaminated2').style.display = 'block';
                }
            document.getElementById("unit_missile_damage2").innerHTML=data[i].missile_damage;
            document.getElementById("unit_missile_base_damage2").innerHTML=data[i].missile_base_damage;
            document.getElementById("unit_missile_ap_damage2").innerHTML=data[i].missile_ap_damage;
            document.getElementById("unit_missile_bonus_vs_infantry2").innerHTML=data[i].missile_bonus_vs_infantry;
            document.getElementById("unit_missile_bonus_vs_large2").innerHTML=data[i].missile_bonus_vs_large;
            document.getElementById("unit_explosion_base_damage2").innerHTML=data[i].explosion_base_damage;
            document.getElementById("unit_explosion_ap_damage2").innerHTML=data[i].explosion_ap_damage;
            document.getElementById("unit_shot_per_volley2").innerHTML=data[i].shot_per_volley;
            document.getElementById("unit_projectile_number2").innerHTML=data[i].projectile_number;
            document.getElementById("unit_reload_time2").innerHTML=data[i].reload_time;
            document.getElementById("unit_total_accuracy2").innerHTML=data[i].total_accuracy;
            document.getElementById("unit_calibration_distance2").innerHTML=data[i].calibration_distance;
            document.getElementById("unit_calibration_area2").innerHTML=data[i].calibration_area;
            document.getElementById("unit_fatigue_modifier2").innerHTML=data[i].fatigue_modifier;
            if (data[i].ammunition == 0) {
            document.getElementById('ammo_box2').style.display = 'none';
            document.getElementById('range_box2').style.display = 'none';
            document.getElementById('missile_damage_box2').style.display = 'none';
            } else {
            document.getElementById('ammo_box2').style.display = 'block';
            document.getElementById('range_box2').style.display = 'block';
            document.getElementById('missile_damage_box2').style.display = 'block';


            };
        };
    };
    compareUnits()
    };



$(function(){
    $('#race2').change(function() {
    $('.unit2').find('#default2').prop('selected', true)
    var displayrace2 = $('#race2 option:selected').text();
    var all_unit_choices2 = '.unit_choice2';
    var race_id2 = $('#race2 option:selected').attr('id');
    race_id2 = race_id2.slice(0, -1)
    $(all_unit_choices2).hide();
    $('#'+race_id2).show();
});
});


function compareUnits() {
     if ($('.all_stats').is(':visible')) {

var u_mp_cost1 = parseInt($('#unit_mp_cost').text());
var u_mp_cost2 = parseInt($('#unit_mp_cost2').text());

if (u_mp_cost1 !=0 && u_mp_cost2 != 0) {


var u_cost1 = parseInt($('#unit_cost').text());
var u_cost2 = parseInt($('#unit_cost2').text());

     if (u_cost1 > u_cost2) {
        $('#sp_cost_comp').text('+' + (u_cost1 - u_cost2)).show();
        $('#sp_cost_comp2').text('-' + (u_cost1 - u_cost2)).show();
        $('#sp_cost_comp').css("background-color","red");
        $('#sp_cost_comp2').css("background-color","green");
    } else if (u_cost2 > u_cost1) {
        $('#sp_cost_comp').text('-' + (u_cost2 - u_cost1)).show();
        $('#sp_cost_comp2').text('+' + (u_cost2 - u_cost1)).show();
        $('#sp_cost_comp2').css("background-color","red");
        $('#sp_cost_comp').css("background-color","green");
    } else {
        $('#sp_cost_comp').text(0);
        $('#sp_cost_comp2').text(0);
        $('#sp_cost_comp').hide();
        $('#sp_cost_comp2').hide();

    }

var u_upkeep1 = parseInt($('#unit_upkeep').text());
var u_upkeep2 = parseInt($('#unit_upkeep2').text());

     if (u_upkeep1 > u_upkeep2) {
        $('#upkeep_comp').text('+' + (u_upkeep1 - u_upkeep2)).show();
        $('#upkeep_comp2').text('-' + (u_upkeep1 - u_upkeep2)).show();
        $('#upkeep_comp').css("background-color","red");
        $('#upkeep_comp2').css("background-color","green");
    } else if (u_upkeep2 > u_upkeep1) {
        $('#upkeep_comp').text('-' + (u_upkeep2 - u_upkeep1)).show();
        $('#upkeep_comp2').text('+' + (u_upkeep2 - u_upkeep1)).show();
        $('#upkeep_comp2').css("background-color","red");
        $('#upkeep_comp').css("background-color","green");
    } else {
        $('#upkeep_comp').text(0);
        $('#upkeep_comp2').text(0);
        $('#upkeep_comp').hide();
        $('#upkeep_comp2').hide();
    }

var u_mp_cost1 = parseInt($('#unit_mp_cost').text());
var u_mp_cost2 = parseInt($('#unit_mp_cost2').text());

     if (u_mp_cost1 > u_mp_cost2) {
        $('#mp_cost_comp').text('+' + (u_mp_cost1 - u_mp_cost2)).show();
        $('#mp_cost_comp2').text('-' + (u_mp_cost1 - u_mp_cost2)).show();
        $('#mp_cost_comp').css("background-color","red");
        $('#mp_cost_comp2').css("background-color","green");
    } else if (u_mp_cost2 > u_mp_cost1) {
        $('#mp_cost_comp').text('-' + (u_mp_cost2 - u_mp_cost1)).show();
        $('#mp_cost_comp2').text('+' + (u_mp_cost2 - u_mp_cost1)).show();
        $('#mp_cost_comp2').css("background-color","red");
        $('#mp_cost_comp').css("background-color","green");
    } else {
        $('#mp_cost_comp').text(0);
        $('#mp_cost_comp2').text(0);
        $('#mp_cost_comp').hide();
        $('#mp_cost_comp2').hide();
    }

var u_health1 = parseInt($('#unit_health').text());
var u_health2 = parseInt($('#unit_health2').text());

     if (u_health1 > u_health2) {
        $('#health_comp').text('+' + (u_health1 - u_health2)).show();
        $('#health_comp2').text('-' + (u_health1 - u_health2)).show();
        $('#health_comp').css("background-color","green");
        $('#health_comp2').css("background-color","red");
    } else if (u_health2 > u_health1) {
        $('#health_comp').text('-' + (u_health2 - u_health1)).show();
        $('#health_comp2').text('+' + (u_health2 - u_health1)).show();
        $('#health_comp2').css("background-color","green");
        $('#health_comp').css("background-color","red");
    } else {
        $('#health_comp').text(0);
        $('#health_comp2').text(0);
        $('#health_comp').hide();
        $('#health_comp2').hide();
    }


var u_health_per_entity1 = parseInt($('#unit_health_per_entity').text());
var u_health_per_entity2 = parseInt($('#unit_health_per_entity2').text());

     if (u_health_per_entity1 > u_health_per_entity2) {
        $('#health_per_entity_comp').text('+' + (u_health_per_entity1 - u_health_per_entity2)).show();
        $('#health_per_entity_comp2').text('-' + (u_health_per_entity1 - u_health_per_entity2)).show();
        $('#health_per_entity_comp').css("background-color","green");
        $('#health_per_entity_comp2').css("background-color","red");
    } else if (u_health_per_entity2 > u_health_per_entity1) {
        $('#health_per_entity_comp').text('-' + (u_health_per_entity2 - u_health_per_entity1)).show();
        $('#health_per_entity_comp2').text('+' + (u_health_per_entity2 - u_health_per_entity1)).show();
        $('#health_per_entity_comp2').css("background-color","green");
        $('#health_per_entity_comp').css("background-color","red");
    } else {
        $('#health_per_entity_comp').text(0);
        $('#health_per_entity_comp2').text(0);
        $('#health_per_entity_comp').hide();
        $('#health_per_entity_comp2').hide();
    }


var u_armour1 = parseInt($('#unit_armour').text());
var u_armour2 = parseInt($('#unit_armour2').text());

     if (u_armour1 > u_armour2) {
        $('#armour_comp').text('+' + (u_armour1 - u_armour2)).show();
        $('#armour_comp2').text('-' + (u_armour1 - u_armour2)).show();
        $('#armour_comp').css("background-color","green");
        $('#armour_comp2').css("background-color","red");
    } else if (u_armour2 > u_armour1) {
        $('#armour_comp').text('-' + (u_armour2 - u_armour1)).show();
        $('#armour_comp2').text('+' + (u_armour2 - u_armour1)).show();
        $('#armour_comp2').css("background-color","green");
        $('#armour_comp').css("background-color","red");
    } else {
        $('#armour_comp').text(0);
        $('#armour_comp2').text(0);
        $('#armour_comp').hide();
        $('#armour_comp2').hide();
    }

var parry_chance1 = parseInt($('#unit_parry_chance').text());
var parry_chance2 = parseInt($('#unit_parry_chance2').text());

     if (parry_chance1 > parry_chance2) {
        $('#parry_chance_comp').text('+' + (parry_chance1 - parry_chance2)).show();
        $('#parry_chance_comp2').text('-' + (parry_chance1 - parry_chance2)).show();
        $('#parry_chance_comp').css("background-color","green");
        $('#parry_chance_comp2').css("background-color","red");
    } else if (parry_chance2 > parry_chance1) {
        $('#parry_chance_comp').text('-' + (parry_chance2 - parry_chance1)).show();
        $('#parry_chance_comp2').text('+' + (parry_chance2 - parry_chance1)).show();
        $('#parry_chance_comp2').css("background-color","green");
        $('#parry_chance_comp').css("background-color","red");
    } else {
        $('#parry_chance_comp').text(0);
        $('#parry_chance_comp2').text(0);
        $('#parry_chance_comp').hide();
        $('#parry_chance_comp2').hide();
    }

var ward_save1 = parseInt($('#unit_ward_save').text());
var ward_save2 = parseInt($('#unit_ward_save2').text());

     if (ward_save1 > ward_save2) {
        $('#ward_save_comp').text('+' + (ward_save1 - ward_save2)).show();
        $('#ward_save_comp2').text('-' + (ward_save1 - ward_save2)).show();
        $('#ward_save_comp').css("background-color","green");
        $('#ward_save_comp2').css("background-color","red");
    } else if (ward_save2 > ward_save1) {
        $('#ward_save_comp').text('-' + (ward_save2 - ward_save1)).show();
        $('#ward_save_comp2').text('+' + (ward_save2 - ward_save1)).show();
        $('#ward_save_comp2').css("background-color","green");
        $('#ward_save_comp').css("background-color","red");
    } else {
        $('#ward_save_comp').text(0);
        $('#ward_save_comp2').text(0);
        $('#ward_save_comp').hide();
        $('#ward_save_comp2').hide();
    }


var physical_resistance1 = parseInt($('#unit_physical_resistance').text());
var physical_resistance2 = parseInt($('#unit_physical_resistance2').text());

     if (physical_resistance1 > physical_resistance2) {
        $('#physical_resistance_comp').text('+' + (physical_resistance1 - physical_resistance2)).show();
        $('#physical_resistance_comp2').text('-' + (physical_resistance1 - physical_resistance2)).show();
        $('#physical_resistance_comp').css("background-color","green");
        $('#physical_resistance_comp2').css("background-color","red");
    } else if (physical_resistance2 > physical_resistance1) {
        $('#physical_resistance_comp').text('-' + (physical_resistance2 - physical_resistance1)).show();
        $('#physical_resistance_comp2').text('+' + (physical_resistance2 - physical_resistance1)).show();
        $('#physical_resistance_comp2').css("background-color","green");
        $('#physical_resistance_comp').css("background-color","red");
    } else {
        $('#physical_resistance_comp').text(0);
        $('#physical_resistance_comp2').text(0);
        $('#physical_resistance_comp').hide();
        $('#physical_resistance_comp2').hide();
    }


var missile_resistance1 = parseInt($('#unit_missile_resistance').text());
var missile_resistance2 = parseInt($('#unit_missile_resistance2').text());

     if (missile_resistance1 > missile_resistance2) {
        $('#missile_resistance_comp').text('+' + (missile_resistance1 - missile_resistance2)).show();
        $('#missile_resistance_comp2').text('-' + (missile_resistance1 - missile_resistance2)).show();
        $('#missile_resistance_comp').css("background-color","green");
        $('#missile_resistance_comp2').css("background-color","red");
    } else if (missile_resistance2 > missile_resistance1) {
        $('#missile_resistance_comp').text('-' + (missile_resistance2 - missile_resistance1)).show();
        $('#missile_resistance_comp2').text('+' + (missile_resistance2 - missile_resistance1)).show();
        $('#missile_resistance_comp2').css("background-color","green");
        $('#missile_resistance_comp').css("background-color","red");
    } else {
        $('#missile_resistance_comp').text(0);
        $('#missile_resistance_comp2').text(0);
        $('#missile_resistance_comp').hide();
        $('#missile_resistance_comp2').hide();
    }


var magic_resistance1 = parseInt($('#unit_magic_resistance').text());
var magic_resistance2 = parseInt($('#unit_magic_resistance2').text());

     if (magic_resistance1 > magic_resistance2) {
        $('#magic_resistance_comp').text('+' + (magic_resistance1 - magic_resistance2)).show();
        $('#magic_resistance_comp2').text('-' + (magic_resistance1 - magic_resistance2)).show();
        $('#magic_resistance_comp').css("background-color","green");
        $('#magic_resistance_comp2').css("background-color","red");
    } else if (magic_resistance2 > magic_resistance1) {
        $('#magic_resistance_comp').text('-' + (magic_resistance2 - magic_resistance1)).show();
        $('#magic_resistance_comp2').text('+' + (magic_resistance2 - magic_resistance1)).show();
        $('#magic_resistance_comp2').css("background-color","green");
        $('#magic_resistance_comp').css("background-color","red");
    } else {
        $('#magic_resistance_comp').text(0);
        $('#magic_resistance_comp2').text(0);
        $('#magic_resistance_comp').hide();
        $('#magic_resistance_comp2').hide();
    }


var fire_resistance1 = parseInt($('#unit_fire_resistance').text());
var fire_resistance2 = parseInt($('#unit_fire_resistance2').text());

     if (fire_resistance1 > fire_resistance2) {
        $('#fire_resistance_comp').text('+' + (fire_resistance1 - fire_resistance2)).show();
        $('#fire_resistance_comp2').text('-' + (fire_resistance1 - fire_resistance2)).show();
        $('#fire_resistance_comp').css("background-color","green");
        $('#fire_resistance_comp2').css("background-color","red");
    } else if (fire_resistance2 > fire_resistance1) {
        $('#fire_resistance_comp').text('-' + (fire_resistance2 - fire_resistance1)).show();
        $('#fire_resistance_comp2').text('+' + (fire_resistance2 - fire_resistance1)).show();
        $('#fire_resistance_comp2').css("background-color","green");
        $('#fire_resistance_comp').css("background-color","red");
    } else {
        $('#fire_resistance_comp').text(0);
        $('#fire_resistance_comp2').text(0);
        $('#fire_resistance_comp').hide();
        $('#fire_resistance_comp2').hide();
    }


var leadership1 = parseInt($('#unit_leadership').text());
var leadership2 = parseInt($('#unit_leadership2').text());

     if (leadership1 > leadership2) {
        $('#leadership_comp').text('+' + (leadership1 - leadership2)).show();
        $('#leadership_comp2').text('-' + (leadership1 - leadership2)).show();
        $('#leadership_comp').css("background-color","green");
        $('#leadership_comp2').css("background-color","red");
    } else if (leadership2 > leadership1) {
        $('#leadership_comp').text('-' + (leadership2 - leadership1)).show();
        $('#leadership_comp2').text('+' + (leadership2 - leadership1)).show();
        $('#leadership_comp2').css("background-color","green");
        $('#leadership_comp').css("background-color","red");
    } else {
        $('#leadership_comp').text(0);
        $('#leadership_comp2').text(0);
        $('#leadership_comp').hide();
        $('#leadership_comp2').hide();
    }


var speed1 = parseInt($('#unit_speed').text());
var speed2 = parseInt($('#unit_speed2').text());

     if (speed1 > speed2) {
        $('#speed_comp').text('+' + (speed1 - speed2)).show();
        $('#speed_comp2').text('-' + (speed1 - speed2)).show();
        $('#speed_comp').css("background-color","green");
        $('#speed_comp2').css("background-color","red");
    } else if (speed2 > speed1) {
        $('#speed_comp').text('-' + (speed2 - speed1)).show();
        $('#speed_comp2').text('+' + (speed2 - speed1)).show();
        $('#speed_comp2').css("background-color","green");
        $('#speed_comp').css("background-color","red");
    } else {
        $('#speed_comp').text(0);
        $('#speed_comp2').text(0);
        $('#speed_comp').hide();
        $('#speed_comp2').hide();
    }


var mel_attack1 = parseInt($('#unit_melee_attack').text());
var mel_attack2 = parseInt($('#unit_melee_attack2').text());

     if (mel_attack1 > mel_attack2) {
        $('#melee_attack_comp').text('+' + (mel_attack1 - mel_attack2)).show();
        $('#melee_attack_comp2').text('-' + (mel_attack1 - mel_attack2)).show();
        $('#melee_attack_comp').css("background-color","green");
        $('#melee_attack_comp2').css("background-color","red");
    } else if (mel_attack2 > mel_attack1) {
        $('#melee_attack_comp').text('-' + (mel_attack2 - mel_attack1)).show();
        $('#melee_attack_comp2').text('+' + (mel_attack2 - mel_attack1)).show();
        $('#melee_attack_comp2').css("background-color","green");
        $('#melee_attack_comp').css("background-color","red");
    } else {
        $('#melee_attack_comp').text(0);
        $('#melee_attack_comp2').text(0);
        $('#melee_attack_comp').hide();
        $('#melee_attack_comp2').hide();
    }


var mel_interval1 = parseFloat($('#unit_attack_interval').text());
var mel_interval2 = parseFloat($('#unit_attack_interval2').text());

     if (mel_interval1 > mel_interval2) {
        $('#attack_interval_comp').text('+' + Number(((mel_interval1 - mel_interval2)).toFixed(2))).show();
        $('#attack_interval_comp2').text('-' + Number(((mel_interval1 - mel_interval2)).toFixed(2))).show();
        $('#attack_interval_comp').css("background-color","green");
        $('#attack_interval_comp2').css("background-color","red");
    } else if (mel_interval2 > mel_interval1) {
        $('#attack_interval_comp').text('-' + Number(((mel_interval2 - mel_interval1)).toFixed(2))).show();
        $('#attack_interval_comp2').text('+' + Number(((mel_interval2 - mel_interval1)).toFixed(2))).show();
        $('#attack_interval_comp2').css("background-color","green");
        $('#attack_interval_comp').css("background-color","red");
    } else {
        $('#attack_interval_comp').text(0);
        $('#attack_interval_comp2').text(0);
        $('#attack_interval_comp').hide();
        $('#attack_interval_comp2').hide();
    }


var mel_defence1 = parseInt($('#unit_melee_defence').text());
var mel_defence2 = parseInt($('#unit_melee_defence2').text());

     if (mel_defence1 > mel_defence2) {
        $('#melee_defence_comp').text('+' + (mel_defence1 - mel_defence2)).show();
        $('#melee_defence_comp2').text('-' + (mel_defence1 - mel_defence2)).show();
        $('#melee_defence_comp').css("background-color","green");
        $('#melee_defence_comp2').css("background-color","red");
    } else if (mel_defence2 > mel_defence1) {
        $('#melee_defence_comp').text('-' + (mel_defence2 - mel_defence1)).show();
        $('#melee_defence_comp2').text('+' + (mel_defence2 - mel_defence1)).show();
        $('#melee_defence_comp2').css("background-color","green");
        $('#melee_defence_comp').css("background-color","red");
    } else {
        $('#melee_defence_comp').text(0);
        $('#melee_defence_comp2').text(0);
        $('#melee_defence_comp').hide();
        $('#melee_defence_comp2').hide();
    }


var wep_strength1 = parseInt($('#unit_weapon_strength').text());
var wep_strength2 = parseInt($('#unit_weapon_strength2').text());

     if (wep_strength1 > wep_strength2) {
        $('#weapon_damage_comp').text('+' + (wep_strength1 - wep_strength2)).show();
        $('#weapon_damage_comp2').text('-' + (wep_strength1 - wep_strength2)).show();
        $('#weapon_damage_comp').css("background-color","green");
        $('#weapon_damage_comp2').css("background-color","red");
    } else if (wep_strength2 > wep_strength1) {
        $('#weapon_damage_comp').text('-' + (wep_strength2 - wep_strength1)).show();
        $('#weapon_damage_comp2').text('+' + (wep_strength2 - wep_strength1)).show();
        $('#weapon_damage_comp2').css("background-color","green");
        $('#weapon_damage_comp').css("background-color","red");
    } else {
        $('#weapon_damage_comp').text(0);
        $('#weapon_damage_comp2').text(0);
        $('#weapon_damage_comp').hide();
        $('#weapon_damage_comp2').hide();
    }


var base_dmg1 = parseInt($('#unit_base_damage').text());
var base_dmg2 = parseInt($('#unit_base_damage2').text());

     if (base_dmg1 > base_dmg2) {
        $('#base_damage_comp').text('+' + (base_dmg1 - base_dmg2)).show();
        $('#base_damage_comp2').text('-' + (base_dmg1 - base_dmg2)).show();
        $('#base_damage_comp').css("background-color","green");
        $('#base_damage_comp2').css("background-color","red");
    } else if (base_dmg2 > base_dmg1) {
        $('#base_damage_comp').text('-' + (base_dmg2 - base_dmg1)).show();
        $('#base_damage_comp2').text('+' + (base_dmg2 - base_dmg1)).show();
        $('#base_damage_comp2').css("background-color","green");
        $('#base_damage_comp').css("background-color","red");
    } else {
        $('#base_damage_comp').text(0);
        $('#base_damage_comp2').text(0);
        $('#base_damage_comp').hide();
        $('#base_damage_comp2').hide();
    }

var ap_dmg1 = parseInt($('#unit_ap_damage').text());
var ap_dmg2 = parseInt($('#unit_ap_damage2').text());

     if (ap_dmg1 > ap_dmg2) {
        $('#ap_damage_comp').text('+' + (ap_dmg1 - ap_dmg2)).show();
        $('#ap_damage_comp2').text('-' + (ap_dmg1 - ap_dmg2)).show();
        $('#ap_damage_comp').css("background-color","green");
        $('#ap_damage_comp2').css("background-color","red");
    } else if (ap_dmg2 > ap_dmg1) {
        $('#ap_damage_comp').text('-' + (ap_dmg2 - ap_dmg1)).show();
        $('#ap_damage_comp2').text('+' + (ap_dmg2 - ap_dmg1)).show();
        $('#ap_damage_comp2').css("background-color","green");
        $('#ap_damage_comp').css("background-color","red");
    } else {
        $('#ap_damage_comp').text(0);
        $('#ap_damage_comp2').text(0);
        $('#ap_damage_comp').hide();
        $('#ap_damage_comp2').hide();
    }


var bns_vs_large1 = parseInt($('#unit_bonus_vs_large').text());
var bns_vs_large2 = parseInt($('#unit_bonus_vs_large2').text());

     if (bns_vs_large1 > bns_vs_large2) {
        $('#bonus_vs_large_comp').text('+' + (bns_vs_large1 - bns_vs_large2)).show();
        $('#bonus_vs_large_comp2').text('-' + (bns_vs_large1 - bns_vs_large2)).show();
        $('#bonus_vs_large_comp').css("background-color","green");
        $('#bonus_vs_large_comp2').css("background-color","red");
    } else if (bns_vs_large2 > bns_vs_large1) {
        $('#bonus_vs_large_comp').text('-' + (bns_vs_large2 - bns_vs_large1)).show();
        $('#bonus_vs_large_comp2').text('+' + (bns_vs_large2 - bns_vs_large1)).show();
        $('#bonus_vs_large_comp2').css("background-color","green");
        $('#bonus_vs_large_comp').css("background-color","red");
    } else {
        $('#bonus_vs_large_comp').text(0);
        $('#bonus_vs_large_comp2').text(0);
        $('#bonus_vs_large_comp').hide();
        $('#bonus_vs_large_comp2').hide();
    }


var bns_vs_inf1 = parseInt($('#unit_bonus_vs_infantry').text());
var bns_vs_inf2 = parseInt($('#unit_bonus_vs_infantry2').text());

     if (bns_vs_inf1 > bns_vs_inf2) {
        $('#bonus_vs_inf_comp').text('+' + (bns_vs_inf1 - bns_vs_inf2)).show();
        $('#bonus_vs_inf_comp2').text('-' + (bns_vs_inf1 - bns_vs_inf2)).show();
        $('#bonus_vs_inf_comp').css("background-color","green");
        $('#bonus_vs_inf_comp2').css("background-color","red");
    } else if (bns_vs_inf2 > bns_vs_inf1) {
        $('#bonus_vs_inf_comp').text('-' + (bns_vs_inf2 - bns_vs_inf1)).show();
        $('#bonus_vs_inf_comp2').text('+' + (bns_vs_inf2 - bns_vs_inf1)).show();
        $('#bonus_vs_inf_comp2').css("background-color","green");
        $('#bonus_vs_inf_comp').css("background-color","red");
    } else {
        $('#bonus_vs_inf_comp').text(0);
        $('#bonus_vs_inf_comp2').text(0);
        $('#bonus_vs_inf_comp').hide();
        $('#bonus_vs_inf_comp2').hide();
    }


var charge_bns1 = parseInt($('#unit_charge_bonus').text());
var charge_bns2 = parseInt($('#unit_charge_bonus2').text());

     if (charge_bns1 > charge_bns2) {
        $('#charge_bonus_comp').text('+' + (charge_bns1 - charge_bns2)).show();
        $('#charge_bonus_comp2').text('-' + (charge_bns1 - charge_bns2)).show();
        $('#charge_bonus_comp').css("background-color","green");
        $('#charge_bonus_comp2').css("background-color","red");
    } else if (charge_bns2 > charge_bns1) {
        $('#charge_bonus_comp').text('-' + (charge_bns2 - charge_bns1)).show();
        $('#charge_bonus_comp2').text('+' + (charge_bns2 - charge_bns1)).show();
        $('#charge_bonus_comp2').css("background-color","green");
        $('#charge_bonus_comp').css("background-color","red");
    } else {
        $('#charge_bonus_comp').text(0);
        $('#charge_bonus_comp2').text(0);
        $('#charge_bonus_comp').hide();
        $('#charge_bonus_comp2').hide();
    }


var ammo1 = parseInt($('#unit_ammunition').text());
var ammo2 = parseInt($('#unit_ammunition2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#ammunition_comp').text(0);
        $('#ammunition_comp2').text(0);
        $('#ammunition_comp').hide();
        $('#ammunition_comp2').hide();
     } else if (ammo1 > ammo2) {
        $('#ammunition_comp').text('+' + (ammo1 - ammo2)).show();
        $('#ammunition_comp2').text('-' + (ammo1 - ammo2)).show();
        $('#ammunition_comp').css("background-color","green");
        $('#ammunition_comp2').css("background-color","red");
    } else if (ammo2 > ammo1) {
        $('#ammunition_comp').text('-' + (ammo2 - ammo1)).show();
        $('#ammunition_comp2').text('+' + (ammo2 - ammo1)).show();
        $('#ammunition_comp2').css("background-color","green");
        $('#ammunition_comp').css("background-color","red");
    } else {
        $('#ammunition_comp').text(0);
        $('#ammunition_comp2').text(0);
        $('#ammunition_comp').hide();
        $('#ammunition_comp2').hide();
    }


var range1 = parseInt($('#unit_range').text());
var range2 = parseInt($('#unit_range2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#range_comp').text(0);
        $('#range_comp2').text(0);
        $('#range_comp').hide();
        $('#range_comp2').hide();
     } else if (range1 > range2) {
        $('#range_comp').text('+' + (range1 - range2)).show();
        $('#range_comp2').text('-' + (range1 - range2)).show();
        $('#range_comp').css("background-color","green");
        $('#range_comp2').css("background-color","red");
    } else if (range2 > range1) {
        $('#range_comp').text('-' + (range2 - range1)).show();
        $('#range_comp2').text('+' + (range2 - range1)).show();
        $('#range_comp2').css("background-color","green");
        $('#range_comp').css("background-color","red");
    } else {
        $('#range_comp').text(0);
        $('#range_comp2').text(0);
        $('#range_comp').hide();
        $('#range_comp2').hide();
    }

var range1 = parseInt($('#unit_range').text());
var range2 = parseInt($('#unit_range2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#range_comp').text(0);
        $('#range_comp2').text(0);
        $('#range_comp').hide();
        $('#range_comp2').hide();
     } else if (range1 > range2) {
        $('#range_comp').text('+' + (range1 - range2)).show();
        $('#range_comp2').text('-' + (range1 - range2)).show();
        $('#range_comp').css("background-color","green");
        $('#range_comp2').css("background-color","red");
    } else if (range2 > range1) {
        $('#range_comp').text('-' + (range2 - range1)).show();
        $('#range_comp2').text('+' + (range2 - range1)).show();
        $('#range_comp2').css("background-color","green");
        $('#range_comp').css("background-color","red");
    } else {
        $('#range_comp').text(0);
        $('#range_comp2').text(0);
        $('#range_comp').hide();
        $('#range_comp2').hide();
    }


var msl_dmg1 = parseInt($('#unit_missile_damage').text());
var msl_dmg2 = parseInt($('#unit_missile_damage2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#missile_damage_comp').text(0);
        $('#missile_damage_comp2').text(0);
        $('#missile_damage_comp').hide();
        $('#missile_damage_comp2').hide();
     } else if (msl_dmg1 > msl_dmg2) {
        $('#missile_damage_comp').text('+' + (msl_dmg1 - msl_dmg2)).show();
        $('#missile_damage_comp2').text('-' + (msl_dmg1 - msl_dmg2)).show();
        $('#missile_damage_comp').css("background-color","green");
        $('#missile_damage_comp2').css("background-color","red");
    } else if (msl_dmg2 > msl_dmg1) {
        $('#missile_damage_comp').text('-' + (msl_dmg2 - msl_dmg1)).show();
        $('#missile_damage_comp2').text('+' + (msl_dmg2 - msl_dmg1)).show();
        $('#missile_damage_comp2').css("background-color","green");
        $('#missile_damage_comp').css("background-color","red");
    } else {
        $('#missile_damage_comp').text(0);
        $('#missile_damage_comp2').text(0);
        $('#missile_damage_comp').hide();
        $('#missile_damage_comp2').hide();
    }

var msl_base_dmg1 = parseInt($('#unit_missile_base_damage').text());
var msl_base_dmg2 = parseInt($('#unit_missile_base_damage2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#missile_base_damage_comp').text(0);
        $('#missile_base_damage_comp2').text(0);
        $('#missile_base_damage_comp').hide();
        $('#missile_base_damage_comp2').hide();
     } else if (msl_base_dmg1 > msl_base_dmg2) {
        $('#missile_base_damage_comp').text('+' + (msl_base_dmg1 - msl_base_dmg2)).show();
        $('#missile_base_damage_comp2').text('-' + (msl_base_dmg1 - msl_base_dmg2)).show();
        $('#missile_base_damage_comp').css("background-color","green");
        $('#missile_base_damage_comp2').css("background-color","red");
    } else if (msl_base_dmg2 > msl_base_dmg1) {
        $('#missile_base_damage_comp').text('-' + (msl_base_dmg2 - msl_base_dmg1)).show();
        $('#missile_base_damage_comp2').text('+' + (msl_base_dmg2 - msl_base_dmg1)).show();
        $('#missile_base_damage_comp2').css("background-color","green");
        $('#missile_base_damage_comp').css("background-color","red");
    } else {
        $('#missile_base_damage_comp').text(0);
        $('#missile_base_damage_comp2').text(0);
        $('#missile_base_damage_comp').hide();
        $('#missile_base_damage_comp2').hide();
    }


var msl_ap_dmg1 = parseInt($('#unit_missile_ap_damage').text());
var msl_ap_dmg2 = parseInt($('#unit_missile_ap_damage2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#missile_ap_damage_comp').text(0);
        $('#missile_ap_damage_comp2').text(0);
        $('#missile_ap_damage_comp').hide();
        $('#missile_ap_damage_comp2').hide();
     } else if (msl_ap_dmg1 > msl_ap_dmg2) {
        $('#missile_ap_damage_comp').text('+' + (msl_ap_dmg1 - msl_ap_dmg2)).show();
        $('#missile_ap_damage_comp2').text('-' + (msl_ap_dmg1 - msl_ap_dmg2)).show();
        $('#missile_ap_damage_comp').css("background-color","green");
        $('#missile_ap_damage_comp2').css("background-color","red");
    } else if (msl_ap_dmg2 > msl_ap_dmg1) {
        $('#missile_ap_damage_comp').text('-' + (msl_ap_dmg2 - msl_ap_dmg1)).show();
        $('#missile_ap_damage_comp2').text('+' + (msl_ap_dmg2 - msl_ap_dmg1)).show();
        $('#missile_ap_damage_comp2').css("background-color","green");
        $('#missile_ap_damage_comp').css("background-color","red");
    } else {
        $('#missile_ap_damage_comp').text(0);
        $('#missile_ap_damage_comp2').text(0);
        $('#missile_ap_damage_comp').hide();
        $('#missile_ap_damage_comp2').hide();
    }


var msl_bns_vs_inf1 = parseInt($('#unit_missile_bonus_vs_infantry').text());
var msl_bns_vs_inf2 = parseInt($('#unit_missile_bonus_vs_infantry2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#missile_bonus_vs_inf_comp').text(0);
        $('#missile_bonus_vs_inf_comp2').text(0);
        $('#missile_bonus_vs_inf_comp').hide();
        $('#missile_bonus_vs_inf_comp2').hide();
     } else if (msl_bns_vs_inf1 > msl_bns_vs_inf2) {
        $('#missile_bonus_vs_inf_comp').text('+' + (msl_bns_vs_inf1 - msl_bns_vs_inf2)).show();
        $('#missile_bonus_vs_inf_comp2').text('-' + (msl_bns_vs_inf1 - msl_bns_vs_inf2)).show();
        $('#missile_bonus_vs_inf_comp').css("background-color","green");
        $('#missile_bonus_vs_inf_comp2').css("background-color","red");
    } else if (msl_bns_vs_inf2 > msl_bns_vs_inf1) {
        $('#missile_bonus_vs_inf_comp').text('-' + (msl_bns_vs_inf2 - msl_bns_vs_inf1)).show();
        $('#missile_bonus_vs_inf_comp2').text('+' + (msl_bns_vs_inf2 - msl_bns_vs_inf1)).show();
        $('#missile_bonus_vs_inf_comp2').css("background-color","green");
        $('#missile_bonus_vs_inf_comp').css("background-color","red");
    } else {
        $('#missile_bonus_vs_inf_comp').text(0);
        $('#missile_bonus_vs_inf_comp2').text(0);
        $('#missile_bonus_vs_inf_comp').hide();
        $('#missile_bonus_vs_inf_comp2').hide();
    }


var msl_bns_vs_large1 = parseInt($('#unit_missile_bonus_vs_large').text());
var msl_bns_vs_large2 = parseInt($('#unit_missile_bonus_vs_large2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#missile_bonus_vs_large_comp').text(0);
        $('#missile_bonus_vs_large_comp2').text(0);
        $('#missile_bonus_vs_large_comp').hide();
        $('#missile_bonus_vs_large_comp2').hide();
     } else if (msl_bns_vs_large1 > msl_bns_vs_large2) {
        $('#missile_bonus_vs_large_comp').text('+' + (msl_bns_vs_large1 - msl_bns_vs_large2)).show();
        $('#missile_bonus_vs_large_comp2').text('-' + (msl_bns_vs_large1 - msl_bns_vs_large2)).show();
        $('#missile_bonus_vs_large_comp').css("background-color","green");
        $('#missile_bonus_vs_large_comp2').css("background-color","red");
    } else if (msl_bns_vs_large2 > msl_bns_vs_large1) {
        $('#missile_bonus_vs_large_comp').text('-' + (msl_bns_vs_large2 - msl_bns_vs_large1)).show();
        $('#missile_bonus_vs_large_comp2').text('+' + (msl_bns_vs_large2 - msl_bns_vs_large1)).show();
        $('#missile_bonus_vs_large_comp2').css("background-color","green");
        $('#missile_bonus_vs_large_comp').css("background-color","red");
    } else {
        $('#missile_bonus_vs_large_comp').text(0);
        $('#missile_bonus_vs_large_comp2').text(0);
        $('#missile_bonus_vs_large_comp').hide();
        $('#missile_bonus_vs_large_comp2').hide();
    }



var expl_base_dmg1 = parseInt($('#unit_explosion_base_damage').text());
var expl_base_dmg2 = parseInt($('#unit_explosion_base_damage2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#explosion_base_dmg_comp').text(0);
        $('#explosion_base_dmg_comp2').text(0);
        $('#explosion_base_dmg_comp').hide();
        $('#explosion_base_dmg_comp2').hide();
     } else if (expl_base_dmg1 > expl_base_dmg2) {
        $('#explosion_base_dmg_comp').text('+' + (expl_base_dmg1 - expl_base_dmg2)).show();
        $('#explosion_base_dmg_comp2').text('-' + (expl_base_dmg1 - expl_base_dmg2)).show();
        $('#explosion_base_dmg_comp').css("background-color","green");
        $('#explosion_base_dmg_comp2').css("background-color","red");
    } else if (expl_base_dmg2 > expl_base_dmg1) {
        $('#explosion_base_dmg_comp').text('-' + (expl_base_dmg2 - expl_base_dmg1)).show();
        $('#explosion_base_dmg_comp2').text('+' + (expl_base_dmg2 - expl_base_dmg1)).show();
        $('#explosion_base_dmg_comp2').css("background-color","green");
        $('#explosion_base_dmg_comp').css("background-color","red");
    } else {
        $('#explosion_base_dmg_comp').text(0);
        $('#explosion_base_dmg_comp2').text(0);
        $('#explosion_base_dmg_comp').hide();
        $('#explosion_base_dmg_comp2').hide();
    }



var expl_ap_dmg1 = parseInt($('#unit_explosion_ap_damage').text());
var expl_ap_dmg2 = parseInt($('#unit_explosion_ap_damage2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#explosion_ap_dmg_comp').text(0);
        $('#explosion_ap_dmg_comp2').text(0);
        $('#explosion_ap_dmg_comp').hide();
        $('#explosion_ap_dmg_comp2').hide();
     } else if (expl_ap_dmg1 > expl_ap_dmg2) {
        $('#explosion_ap_dmg_comp').text('+' + (expl_ap_dmg1 - expl_ap_dmg2)).show();
        $('#explosion_ap_dmg_comp2').text('-' + (expl_ap_dmg1 - expl_ap_dmg2)).show();
        $('#explosion_ap_dmg_comp').css("background-color","green");
        $('#explosion_ap_dmg_comp2').css("background-color","red");
    } else if (expl_ap_dmg2 > expl_ap_dmg1) {
        $('#explosion_ap_dmg_comp').text('-' + (expl_ap_dmg2 - expl_ap_dmg1)).show();
        $('#explosion_ap_dmg_comp2').text('+' + (expl_ap_dmg2 - expl_ap_dmg1)).show();
        $('#explosion_ap_dmg_comp2').css("background-color","green");
        $('#explosion_ap_dmg_comp').css("background-color","red");
    } else {
        $('#explosion_ap_dmg_comp').text(0);
        $('#explosion_ap_dmg_comp2').text(0);
        $('#explosion_ap_dmg_comp').hide();
        $('#explosion_ap_dmg_comp2').hide();
    }



var shot_per_vol1 = parseInt($('#unit_shot_per_volley').text());
var shot_per_vol2 = parseInt($('#unit_shot_per_volley2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#shots_per_volley_comp').text(0);
        $('#shots_per_volley_comp2').text(0);
        $('#shots_per_volley_comp').hide();
        $('#shots_per_volley_comp2').hide();
     } else if (shot_per_vol1 > shot_per_vol2) {
        $('#shots_per_volley_comp').text('+' + (shot_per_vol1 - shot_per_vol2)).show();
        $('#shots_per_volley_comp2').text('-' + (shot_per_vol1 - shot_per_vol2)).show();
        $('#shots_per_volley_comp').css("background-color","green");
        $('#shots_per_volley_comp2').css("background-color","red");
    } else if (shot_per_vol2 > shot_per_vol1) {
        $('#shots_per_volley_comp').text('-' + (shot_per_vol2 - shot_per_vol1)).show();
        $('#shots_per_volley_comp2').text('+' + (shot_per_vol2 - shot_per_vol1)).show();
        $('#shots_per_volley_comp2').css("background-color","green");
        $('#shots_per_volley_comp').css("background-color","red");
    } else {
        $('#shots_per_volley_comp').text(0);
        $('#shots_per_volley_comp2').text(0);
        $('#shots_per_volley_comp').hide();
        $('#shots_per_volley_comp2').hide();
    }


var unit_proj_num1 = parseInt($('#unit_projectile_number').text());
var unit_proj_num2 = parseInt($('#unit_projectile_number2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#projectile_number_comp').text(0);
        $('#projectile_number_comp2').text(0);
        $('#projectile_number_comp').hide();
        $('#projectile_number_comp2').hide();
     } else if (unit_proj_num1 > unit_proj_num2) {
        $('#projectile_number_comp').text('+' + (unit_proj_num1 - unit_proj_num2)).show();
        $('#projectile_number_comp2').text('-' + (unit_proj_num1 - unit_proj_num2)).show();
        $('#projectile_number_comp').css("background-color","green");
        $('#projectile_number_comp2').css("background-color","red");
    } else if (unit_proj_num2 > unit_proj_num1) {
        $('#projectile_number_comp').text('-' + (unit_proj_num2 - unit_proj_num1)).show();
        $('#projectile_number_comp2').text('+' + (unit_proj_num2 - unit_proj_num1)).show();
        $('#projectile_number_comp2').css("background-color","green");
        $('#projectile_number_comp').css("background-color","red");
    } else {
        $('#projectile_number_comp').text(0);
        $('#projectile_number_comp2').text(0);
        $('#projectile_number_comp').hide();
        $('#projectile_number_comp2').hide();
    }


var rel_time1 = parseFloat($('#unit_reload_time').text());
var rel_time2 = parseFloat($('#unit_reload_time2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#reload_time_comp').text(0);
        $('#reload_time_comp2').text(0);
        $('#reload_time_comp').hide();
        $('#reload_time_comp2').hide();
     } else if (rel_time1 > rel_time2) {
        $('#reload_time_comp').text('+' + Number(((rel_time1 - rel_time2)).toFixed(2))).show();
        $('#reload_time_comp2').text('-' + Number(((rel_time1 - rel_time2)).toFixed(2))).show();
        $('#reload_time_comp').css("background-color","green");
        $('#reload_time_comp2').css("background-color","red");
    } else if (rel_time2 > rel_time1) {
        $('#reload_time_comp').text('-' + Number(((rel_time2 - rel_time1)).toFixed(2))).show();
        $('#reload_time_comp2').text('+' + Number(((rel_time2 - rel_time1)).toFixed(2))).show();
        $('#reload_time_comp2').css("background-color","green");
        $('#reload_time_comp').css("background-color","red");
    } else {
        $('#reload_time_comp').text(0);
        $('#reload_time_comp2').text(0);
        $('#reload_time_comp').hide();
        $('#reload_time_comp2').hide();
    }

var total_acc1 = parseInt($('#unit_total_accuracy').text());
var total_acc2 = parseInt($('#unit_total_accuracy2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#total_accuracy_comp').text(0);
        $('#total_accuracy_comp2').text(0);
        $('#total_accuracy_comp').hide();
        $('#total_accuracy_comp2').hide();
     } else if (total_acc1 > total_acc2) {
        $('#total_accuracy_comp').text('+' + (total_acc1 - total_acc2)).show();
        $('#total_accuracy_comp2').text('-' + (total_acc1 - total_acc2)).show();
        $('#total_accuracy_comp').css("background-color","green");
        $('#total_accuracy_comp2').css("background-color","red");
    } else if (total_acc2 > total_acc1) {
        $('#total_accuracy_comp').text('-' + (total_acc2 - total_acc1)).show();
        $('#total_accuracy_comp2').text('+' + (total_acc2 - total_acc1)).show();
        $('#total_accuracy_comp2').css("background-color","green");
        $('#total_accuracy_comp').css("background-color","red");
    } else {
        $('#total_accuracy_comp').text(0);
        $('#total_accuracy_comp2').text(0);
        $('#total_accuracy_comp').hide();
        $('#total_accuracy_comp2').hide();
    }

var calib_dist1 = parseInt($('#unit_calibration_distance').text());
var calib_dist2 = parseInt($('#unit_calibration_distance2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#calibration_distance_comp').text(0);
        $('#calibration_distance_comp2').text(0);
        $('#calibration_distance_comp').hide();
        $('#calibration_distance_comp2').hide();
     } else if (calib_dist1 > calib_dist2) {
        $('#calibration_distance_comp').text('+' + (calib_dist1 - calib_dist2)).show();
        $('#calibration_distance_comp2').text('-' + (calib_dist1 - calib_dist2)).show();
        $('#calibration_distance_comp').css("background-color","green");
        $('#calibration_distance_comp2').css("background-color","red");
    } else if (calib_dist2 > calib_dist1) {
        $('#calibration_distance_comp').text('-' + (calib_dist2 - calib_dist1)).show();
        $('#calibration_distance_comp2').text('+' + (calib_dist2 - calib_dist1)).show();
        $('#calibration_distance_comp2').css("background-color","green");
        $('#calibration_distance_comp').css("background-color","red");
    } else {
        $('#calibration_distance_comp').text(0);
        $('#calibration_distance_comp2').text(0);
        $('#calibration_distance_comp').hide();
        $('#calibration_distance_comp2').hide();
    }


var calib_area1 = parseFloat($('#unit_calibration_area').text());
var calib_area2 = parseFloat($('#unit_calibration_area2').text());

     if (ammo2 == 0 || ammo1 == 0) {
        $('#calibration_area_comp').text(0);
        $('#calibration_area_comp2').text(0);
        $('#calibration_area_comp').hide();
        $('#calibration_area_comp2').hide();
     } else if (calib_area1 > calib_area2) {
        $('#calibration_area_comp').text('+' + Number(((calib_area1 - calib_area2)).toFixed(2))).show();
        $('#calibration_area_comp2').text('-' + Number(((calib_area1 - calib_area2)).toFixed(2))).show();
        $('#calibration_area_comp').css("background-color","green");
        $('#calibration_area_comp2').css("background-color","red");
    } else if (calib_area2 > calib_area1) {
        $('#calibration_area_comp').text('-' + Number(((calib_area2 - calib_area1)).toFixed(2))).show();
        $('#calibration_area_comp2').text('+' + Number(((calib_area2 - calib_area1)).toFixed(2))).show();
        $('#calibration_area_comp2').css("background-color","green");
        $('#calibration_area_comp').css("background-color","red");
    } else {
        $('#calibration_area_comp').text(0);
        $('#calibration_area_comp2').text(0);
        $('#calibration_area_comp').hide();
        $('#calibration_area_comp2').hide();
    }





     }
    }
}



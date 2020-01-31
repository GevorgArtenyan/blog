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

btn.addEventListener("click", function(){
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
                document.getElementById("image-section").innerHTML=image;
                $('#vzgo').html("");
                $('#vzgo').prepend('<img id="ap_damage" src="' +  data[i].unit_image + '" />');
                document.getElementById("unit_name").innerHTML=data[i].unit_name;
                document.getElementById("unit_cost").innerHTML=data[i].cost;
                document.getElementById("unit_upkeep").innerHTML=data[i].upkeep;
                document.getElementById("unit_mp_cost").innerHTML=data[i].mp_cost;
                document.getElementById("unit_health").innerHTML=data[i].health;
                document.getElementById("unit_health_per_entity").innerHTML=data[i].health_per_entity;
                if (data[i].bronze_shield) {
                    document.getElementById('bronze_shield').style.display = 'block';
                }
                if (data[i].silver_shield) {
                    document.getElementById('silver_shield').style.display = 'block';
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
                document.getElementById("unit_melee_attack").innerHTML=data[i].melee_attack;
                document.getElementById("unit_attack_interval").innerHTML=data[i].attack_interval;
                document.getElementById("unit_melee_defence").innerHTML=data[i].melee_defence;
                if (data[i].melee_ap_yes_no) {
                    document.getElementById('ap_damage').style.display = 'block';
                }
                if (data[i].melee_bonus_large_yes_no) {
                    document.getElementById('bonus_vs_inf').style.display = 'block';
                }
                if (data[i].melee_bonus_inf_yes_no) {
                    document.getElementById('bonus_vs_large').style.display = 'block';
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
                if (data[i].missile_poision_attack) {
                    document.getElementById('missile_poision_attack').style.display = 'block';
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
                if (data[i].burnt) {
                    document.getElementById('burnt').style.display = 'block';
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






var btn2 = document.getElementById('btn2')

btn2.addEventListener("click", function(){
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
            document.getElementById("image-section2").innerHTML=image2;
            document.getElementById("unit_name2").innerHTML=data[i].unit_name;
            document.getElementById("unit_cost2").innerHTML=data[i].cost;
            document.getElementById("unit_upkeep2").innerHTML=data[i].upkeep;
            document.getElementById("unit_mp_cost2").innerHTML=data[i].mp_cost;
            document.getElementById("unit_health2").innerHTML=data[i].health;
            document.getElementById("unit_health_per_entity2").innerHTML=data[i].health_per_entity;
            if (data[i].bronze_shield) {
                document.getElementById('bronze_shield2').style.display = 'block';
            }
            if (data[i].silver_shield) {
                document.getElementById('silver_shield2').style.display = 'block';
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
            document.getElementById("unit_melee_attack2").innerHTML=data[i].melee_attack;
            document.getElementById("unit_attack_interval2").innerHTML=data[i].attack_interval;
            document.getElementById("unit_melee_defence2").innerHTML=data[i].melee_defence;
            if (data[i].melee_ap_yes_no) {
                document.getElementById('ap_damage2').style.display = 'block';
            }
            if (data[i].melee_bonus_large_yes_no) {
                document.getElementById('bonus_vs_inf2').style.display = 'block';
            }
            if (data[i].melee_bonus_inf_yes_no) {
                document.getElementById('bonus_vs_large2').style.display = 'block';
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
            if (data[i].missile_poision_attack) {
                document.getElementById('missile_poision_attack2').style.display = 'block';
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
            if (data[i].burnt) {
                document.getElementById('burnt2').style.display = 'block';
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
     var u_cost1 = parseInt($('#unit_cost').text());
     var u_cost2 = parseInt($('#unit_cost2').text());

     if ($('#all_stats').is(':visible') || $('#all_stats2').is(':visible')) {
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


var u_upkeep1 = parseInt($('#unit_upkeep').text());
var u_upkeep2 = parseInt($('#unit_upkeep2').text());

    }
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
    } else if (u_mp_cost2 > u_mp_cost1) {
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





    }



}






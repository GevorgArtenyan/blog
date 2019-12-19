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
        $('#all_stats').show()
    }
    ourRequest.send()
});


    function renderHTML(data) {
        var displayunit = $('.unit option:selected').not('#default').text();
        var trying_things = document.getElementById("trying_things")
        var container = document.getElementById("ourcontainer")
        var htmlString = "";
        for (i=0; i < data.length; i++){
            if (displayunit == data[i].unit_name) {
                htmlString += "<p>Name: "  + data[i].cost + "</p>" ;
            var unit_stats = document.getElementById("unit_stats");
                var image = "<img src=\"/static/warhammerwiki/images/Unit-Cards/"+ data[i].slug +".png\">"
                document.getElementById("image-section").innerHTML=image;
                document.getElementById("unit_name").innerHTML=data[i].unit_name;
                document.getElementById("unit_cost").innerHTML=data[i].cost;
                document.getElementById("unit_upkeep").innerHTML=data[i].upkeep;
                document.getElementById("unit_mp_cost").innerHTML=data[i].mp_cost;
                document.getElementById("unit_health").innerHTML=data[i].health;
                document.getElementById("unit_health_per_entity").innerHTML=data[i].upkeep;
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
                document.getElementById("unit_weapon_strength").innerHTML=data[i].melee_defence;
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
                }
            };
        };
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

$(function(){
    $('.unit').change(function() {
        $('#trying_things').empty()
   var displayunit = $('.unit option:selected').not('#default').text();
       $('#trying_things').text(displayunit)
        });
    });



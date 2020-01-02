$('#compare_btn').click(function() {
     var u_cost1 = parseInt($('#unit_cost').text());
     var u_cost2 = parseInt($('#unit_cost2').text());
     var u_upkeep1 = parseInt($('#unit_upkeep').text());
     var u_upkeep2 = parseInt($('#unit_upkeep2').text());

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
});

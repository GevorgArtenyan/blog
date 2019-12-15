$(function() {
  $('[data-tooltip]').tooltip();
});

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





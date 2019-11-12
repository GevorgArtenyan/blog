from django.shortcuts import render
from django.views.generic import ListView, DeleteView, DetailView, UpdateView, CreateView
from .models import Race, Unit


class RaceListView(ListView):
    model = Race
    template_name = 'warhammerwiki/home.html'
    context_object_name = 'races'

def race_detail(request, race_name_slug):
    context_dict = {}

    try:
        race = Race.objects.get(slug=race_name_slug)
        units = Unit.objects.filter(race=race)

        context_dict['units'] = units
        context_dict['races'] = race
    except Race.DoesNotExist:
        context_dict['races'] = None
        context_dict['units'] = None

    if request.method == 'POST':
        if request.method == 'POST':
            query = request.POST['query'].strip()



    return render(request, 'warhammerwiki/race_detail.html', context_dict)



class UnitDetailView(DetailView):
    model = Unit
    template_name = 'warhammerwiki/unit_detail.html'


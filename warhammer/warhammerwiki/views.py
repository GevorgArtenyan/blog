from django.shortcuts import render
from django.views.generic import ListView, DeleteView, DetailView, UpdateView, CreateView
from .models import Race, Unit
from django.http import Http404
from django.db.models import Q
from .filters import UnitFilter
from django.contrib.auth.mixins import LoginRequiredMixin



def about(request):
    return render(request, 'warhammerwiki/about.html')

class RaceListView(ListView):
    model = Race
    template_name = 'warhammerwiki/home.html'
    context_object_name = 'races'


def home(request):
    race_list = Race.objects.all()
    unit_list = Unit.objects.all()
    context_dict = {}
    context_dict['races'] = race_list
    context_dict['units'] = unit_list


    return render(request, 'warhammerwiki/home.html', context_dict)


def race_detail(request, race_name_slug):
    context_dict = {}

    try:
        race = Race.objects.get(slug=race_name_slug)
        units = Unit.objects.filter(race=race)

        context_dict['units'] = units
        context_dict['race'] = race
    except Race.DoesNotExist:
        raise Http404('The race does not exist')


    return render(request, 'warhammerwiki/race_detail.html', context_dict)



class UnitDetailView(DetailView):
    model = Unit
    template_name = 'warhammerwiki/unit_detail.html'


class AllUnitList(ListView):
    model = Unit
    template_name = 'warhammerwiki/all_units.html'
    context_object_name = 'units'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = UnitFilter(self.request.GET, queryset=self.get_queryset())
        return context

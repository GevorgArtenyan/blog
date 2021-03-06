from django.shortcuts import render
from django.views.generic import ListView, DeleteView, DetailView, UpdateView, CreateView
from .models import Race, Unit
from django.http import Http404
from django.db.models import Q
from .filters import UnitFilter
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.core import serializers
import json
from django.contrib.auth.models import User
from .serializers import UnitSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
class UnitAPIListView(generics.ListAPIView):
    lookup_field = 'pk'
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
    permission_classes = [IsAuthenticated]



def trying(request):
    unit_json = serializers.serialize('json', Unit.objects.all())
    data = {'unitjson':unit_json}

    return JsonResponse(data)

def about(request):
    all_races = Race.objects.all()
    return render(request, 'warhammerwiki/compare.html', {'allraces':all_races})

class RaceListView(ListView):
    model = Race
    template_name = 'warhammerwiki/home.html'
    context_object_name = 'races'


def home(request):
    race_list = Race.objects.all()
    unit_list = Unit.objects.all()
    context_dict = {'he':Race.objects.get(id=1), 'de':Race.objects.get(id=2), 'we':Race.objects.get(id=3), 'skaven':Race.objects.get(id=4), 'greenskins':Race.objects.get(id=5),
                    'chaos':Race.objects.get(id=6), 'empire':Race.objects.get(id=7), 'dwarfs':Race.objects.get(id=8), 'undead':Race.objects.get(id=9), 'vcoast':Race.objects.get(id=10),
                    'tk':Race.objects.get(id=11), 'norsca':Race.objects.get(id=12), 'bretonnia':Race.objects.get(id=13), 'lizardmen':Race.objects.get(id=14), 'beastmen':Race.objects.get(id=15)}
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


def example(request):
    return render(request, 'warhammerwiki/example.html')
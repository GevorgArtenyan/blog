from django.shortcuts import render
from django.views.generic import ListView, DeleteView, DetailView, UpdateView, CreateView
from .models import Race, Unit

class RaceListView(ListView):
    model = Race


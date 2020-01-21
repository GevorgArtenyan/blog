from django.contrib import admin
from .models import Unit, Race

class RaceAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('race_name',)}

class UnitAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('key',)}

admin.site.register(Race, RaceAdmin)
admin.site.register(Unit, UnitAdmin)



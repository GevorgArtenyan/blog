import django_filters
from .models import Unit

class UnitFilter(django_filters.FilterSet):

    class Meta:
        model = Unit
        fields = {
            'unit_name':['icontains'],
        }
from django.contrib import admin
from .models import Room, Inventory, Staff, Floor
# Register your models here.
admin.site.register(Room)
admin.site.register(Inventory)
admin.site.register(Staff)
admin.site.register(Floor)
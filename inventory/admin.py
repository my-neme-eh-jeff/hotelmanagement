from django.contrib import admin
from .models import Room, Inventory, Staff
# Register your models here.
admin.site.register(Room)
admin.site.register(Inventory)
admin.site.register(Staff)
from django.db import models

# Create your models here.
class Room(models.Model):
    room_id = models.BigIntegerField()

class Inventory(models.Model):
    room = models.ForeignKey(Room, on_delete = models.CASCADE)
    mini_bar = models.JSONField()
    toiletries = models.JSONField()
    towels = models.JSONField()

staff_choice = [('senior', 'senior'), ('entry', 'entry')]

class Staff(models.Model):
    staff_type = models.CharField(max_length =50, choices=staff_choice)
    name = models.CharField(max_length = 100)

# class StaffAssignedRoom(models.Model):
#     room = models.
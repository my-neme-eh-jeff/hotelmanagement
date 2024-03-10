from django.db import models

# Create your models here.
class Floor(models.Model):
    floor_no = models.BigIntegerField()

class Room(models.Model):
    floor = models.ForeignKey(Floor, on_delete = models.CASCADE)
    room_id = models.BigIntegerField()
    room_details = models.JSONField()

class Inventory(models.Model):
    room = models.ForeignKey(Room, on_delete = models.CASCADE)
    mini_bar = models.JSONField()
    toiletries = models.JSONField()
    towels = models.JSONField()

staff_choice = [('senior', 'senior'), ('entry', 'entry')]

class Staff(models.Model):
    staff_type = models.CharField(max_length =50, choices=staff_choice)
    name = models.CharField(max_length = 100)
    room = models.ForeignKey(Room, on_delete = models.CASCADE)
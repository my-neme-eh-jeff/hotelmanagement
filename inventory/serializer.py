from rest_framework import serializers
from .models import Room, Inventory, Staff, Floor

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class InventortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'

class StaffSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        del data['staff_type']
        return data
    
class FloorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Floor
        fields = '__all__'

class StaffSerailizer2(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

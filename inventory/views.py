from django.shortcuts import render
from .models import Room, Inventory, Staff
from .serializer import RoomSerializer, InventortSerializer, StaffSerailizer
from rest_framework.generics import GenericAPIView, CreateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.response import Response
# Create your views here.

class RoomApi(GenericAPIView, CreateModelMixin, ListModelMixin):
    serializer_class = RoomSerializer
    queryset = Room.objects

    def post(self, request):
        return self.create(request)
    def get(self, request):
        return self.list(request)

class RoomApi2(GenericAPIView, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id)
    def patch(self, request, id):
        return self.partial_update(request,id)
    def put(self, request, id):
        return self.update(request, id)
    
class InventoryApi(GenericAPIView, CreateModelMixin,):
    serializer_class = InventortSerializer
    queryset = Inventory.objects

    def post(self, request):
        return self.create(request)

class InventoryApi2(GenericAPIView, RetrieveModelMixin, UpdateModelMixin):
    serializer_class = InventortSerializer
    queryset = Inventory.objects
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id)
    def patch(self, request, id):
        return self.partial_update(request,id)
    def put(self, request, id):
        return self.update(request, id)
    
class StaffApi(GenericAPIView, ListModelMixin):
    serializer_class = StaffSerailizer
    queryset = Staff.objects
    
    def get(self, request):
        staff_senior_data = self.serializer_class(self.queryset.filter(staff_type = 'senior'), many = True)
        staff_entry_data = self.serializer_class(self.queryset.filter(staff_type = 'entry'), many = True)
        staff = {'senior' : [staff for staff in staff_senior_data.data], 'entry': [staff for staff in staff_entry_data.data]}
        return Response(staff)

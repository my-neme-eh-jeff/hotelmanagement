from django.urls import path
from .views import RoomApi, RoomApi2, InventoryApi, InventoryApi2, StaffApi, FloorApi, StaffApi2

urlpatterns = [
    path('room/', RoomApi.as_view()),
    path('room/<id>/', RoomApi2.as_view()),
    path('room-inventory/', InventoryApi.as_view()),
    path('room-inventory/<id>/', InventoryApi2.as_view()),
    path('staff/', StaffApi.as_view()),
    path('staff/<id>/', StaffApi2.as_view()),
    path('floor/', FloorApi.as_view()),
]
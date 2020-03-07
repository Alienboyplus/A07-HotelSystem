from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import UserFaceSerializer
from .serializer import UserSerializer
from .serializer import DiningQrcodeSerializer
from .models import UserFaceInfo
from .models import DiningQrcode
from django.contrib.auth.models import User

# Create your views here.

class UserFaceViewSet(ModelViewSet):
    queryset = UserFaceInfo.objects.all()
    serializer_class = UserFaceSerializer

class registerViewSet(ModelViewSet):
    queryset =User.objects.all()
    serializer_class = UserSerializer

class DiningQrcodeViewSet(ModelViewSet):
    queryset =DiningQrcode.objects.all()
    serializer_class = DiningQrcodeSerializer
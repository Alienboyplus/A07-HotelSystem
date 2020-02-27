from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import UserFaceSerializer
from .serializer import UserSerializer
from .models import UserFaceInfo
from django.contrib.auth.models import User

class UserFaceViewSet(ModelViewSet):
    queryset = UserFaceInfo.objects.all()
    serializer_class = UserFaceSerializer
# Create your views here.

class registerViewSet(ModelViewSet):
    queryset =User.objects.all()
    serializer_class = UserSerializer
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserFaceInfo

class UserFaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFaceInfo
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
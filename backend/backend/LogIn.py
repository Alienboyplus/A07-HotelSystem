# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
import json

# class login_views(APIView):
#     def post(self, request):

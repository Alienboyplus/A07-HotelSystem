# -*- coding: utf-8 -*-
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib import auth
from django.contrib.auth.models import User
from functools import wraps
from django.contrib.auth import authenticate, login


import json
import django

# TODO(mhn): 现在的session获取每次不一样，需要找到方法保存用户登录信息
class do_login(APIView):
    def post(self, request):

        username = request.data.get('phoneNumber')
        password = request.data.get('password')
        print(username)
        print(password)

        user = authenticate(request, username=username, password=password)
        print(user)

        if user:
            if user.is_active:
                login(request, user)
                # print(type(request.session['is_login']))
                #request.session['is_login'] = '1'
                return JsonResponse({"code":"0", "msg":"success!"}, status=200)
            else:
                return JsonResponse({"code": "1", "msg": "User information has expired!"}, status=200)
        return JsonResponse({"code":"2", "msg":"Login failed! Please check your username or password!"})

    def check_login(self, f):
        @wraps(f)
        def inner(request, *arg, **kwargs):
            if request.session.get('is_login') == '1':
                return f(request, *arg, **kwargs)
            else:
                pass
        return inner
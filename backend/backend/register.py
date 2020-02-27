# -*- coding: utf-8 -*-
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from hotelSystem.models import UserFaceInfo
from captcha.fields import CaptchaField
import json
import django


#TODO(mhn): 待研究采用何种验证码
class do_register(APIView):
    def post(self, request):
        # print(request.method)
        try:

            # 读取用户传来的信息，并打印出来
            phoneNumber = request.data.get("phoneNumber")
            passWord = request.data.get("password")
            print(phoneNumber)
            print(passWord)

            # 在数据库中保存用户信息
            # 这里是有涉及到auth和自己建的表
            User.objects.create_user(username=phoneNumber, password=passWord)
            UserFaceInfo(phone_number=phoneNumber, password=passWord)
            #user.save()
            #reg.save()
        except django.db.utils.IntegrityError:
            # 数据库中已经有该信息，返回
            return JsonResponse({"code": 1, "message":"Phone number has been registerd!"})
        else:
            # 保存成功
            return JsonResponse({"code": 0, "message": "success"})

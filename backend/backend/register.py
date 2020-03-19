# -*- coding: utf-8 -*-
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from hotelSystem.models import Captcha
from hotelSystem.models import DiningQrcode
#from captcha.fields import CaptchaField
import random, base64, django, time, json

#TODO(mhn): 待研究采用何种验证码
class do_register(APIView):
    def post(self, request):
        # print(request.method)
        # 读取用户传来的信息，并打印出来
        # 在数据库中保存用户信息
        # 这里是有涉及到auth和自己建的表
        phoneNumber = request.data.get("phoneNumber")
        passWord = request.data.get("password")
        user_verCode = request.data.get("verCode")
        print(phoneNumber)
        print(passWord)
        print(user_verCode)
        # 先判断用户有没有注册过
        if User.objects.filter(username=phoneNumber).exists():
            print(User.objects.filter(username=phoneNumber))
            return JsonResponse({"code": 1, "message": "Phone number has been registerd!"})
        #再判断验证码对不对
        if not Captcha.objects.filter(phonenumber=phoneNumber, captcha=user_verCode).exists():
            return JsonResponse({"code": 2, "message": "Wrong user_verCode!"})
        else:
            # 保存成功
            print(User.objects.filter(username=phoneNumber))
            User.objects.create_user(username=phoneNumber, password=passWord)
            living_days = random.randint(1,14) # 模仿从预订平台上获取的入住时间
            register_time = time.time() # 获取注册时的时间
            text = str(phoneNumber) + str(living_days) + str(int(register_time))
            print(text)
            qrcode_text = base64.b64encode(text.encode('utf-8'))
            print(qrcode_text)
            print(base64.b64decode(qrcode_text))
            DiningQrcode(phonenumber=phoneNumber, qrcode=qrcode_text.decode('utf-8')).save()

            return JsonResponse({"code": 0, "message": "success"})


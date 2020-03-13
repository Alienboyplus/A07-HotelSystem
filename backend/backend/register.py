# -*- coding: utf-8 -*-
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from hotelSystem.models import UserFaceInfo
from hotelSystem.models import DiningQrcode
#from captcha.fields import CaptchaField
import random, base64, django, time, json

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
            living_days = random.randint(1,14) # 模仿从预订平台上获取的入住时间
            register_time = time.time() # 获取注册时的时间
            text = str(phoneNumber) + str(living_days) + str(int(register_time))
            print(text)
            qrcode_text = base64.b64encode(text.encode('utf-8'))
            print(qrcode_text)
            print(base64.b64decode(qrcode_text))
            DiningQrcode(phonenumber=phoneNumber, qrcode=qrcode_text.decode('utf-8')).save()

            return JsonResponse({"code": 0, "message": "success"})


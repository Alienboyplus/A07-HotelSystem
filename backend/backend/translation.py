# -*- coding: utf-8 -*-
from rest_framework.views import APIView
import sys
import uuid
import requests
import hashlib
from django.http import JsonResponse
import time
from imp import reload

import time

# reload(sys)

# YOUDAO_URL = 'https://openapi.youdao.com/api'
# APP_KEY = '42a590aaa4eec639'
# APP_SECRET = 'EZ15plx41YdkfvseVmW3D2iwtG8h04VM'


# def encrypt(signStr):
#     hash_algorithm = hashlib.sha256()
#     hash_algorithm.update(signStr.encode('utf-8'))
#     return hash_algorithm.hexdigest()


# def truncate(q):
#     if q is None:
#         return None
#     size = len(q)
#     return q if size <= 20 else q[0:10] + str(size) + q[size - 10:size]


# def do_request(data):
#     headers = {'Content-Type': 'application/x-www-form-urlencoded'}
#     return requests.post(YOUDAO_URL, data=data, headers=headers)

class do_translate(APIView):

    def post(self, request):

        print(request.method)
        YOUDAO_URL = 'https://openapi.youdao.com/api'
        APP_KEY = '42a590aaa4eec639'
        APP_SECRET = 'oWHprb3jlsf7g6wkvk2OK6YHTki0Oy5b'
        # q = "待输入的文字"
        q = request.data.get("input_text")
        mytruncate = q
        if q is not None:
            size = len(q)
            if size <= 20:
                mytruncate = q
            else:
                mytruncate = q[0:10] + str(size) + q[size - 10:size]
        data = {}
        data['from'] = 'en'
        data['to'] = 'zh-CHS'
        data['signType'] = 'v3'
        curtime = str(int(time.time()))
        data['curtime'] = curtime
        salt = str(uuid.uuid1())
        signStr = APP_KEY + mytruncate + salt + curtime + APP_SECRET

        hash_algorithm = hashlib.sha256()
        hash_algorithm.update(signStr.encode('utf-8'))
        sign = hash_algorithm.hexdigest()

        # sign = encrypt(signStr)

        data['appKey'] = APP_KEY
        data['q'] = q
        data['salt'] = salt
        data['sign'] = sign

        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        response = requests.post(YOUDAO_URL, data=data, headers=headers)
        # response = do_request(data)

        contentType = response.headers['Content-Type']
        if contentType == "audio/mp3":
            millis = int(round(time.time() * 1000))
            filePath = "合成的音频存储路径" + str(millis) + ".mp3"
            fo = open(filePath, 'wb')
            fo.write(response.content)
            fo.close()
        else:
            print(response.content)
            #TODO:翻译已经测试通了，编码问题待解决


        return JsonResponse({"code":"0", "msg":"success!"})
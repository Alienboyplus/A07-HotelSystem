
import hashlib
import json
import time
import urllib
import urllib.parse as parse
import urllib.request
import random
from django.http import JsonResponse
from hotelSystem.models import Captcha
from rest_framework.views import APIView
from aliyunsdkcore.client import AcsClient
from aliyunsdkcore.request import CommonRequest

class gen_captcha(APIView):

    def post(self, request):

        # ①：获取用户手机号码
        phoneNumber = request.data.get("phoneNumber")
        # ②：生成六位数验证码和日期
        code = self.gen_code()
        date = time.strftime("%Y%m%d")
        # ③：检查现有用户是否已经拥有验证码，有的话就删除
        if Captcha.objects.filter(phonenumber=phoneNumber).exists():
            Captcha.objects.filter(phonenumber=phoneNumber).delete()
            print("Multiple vercode detected! All code has been deleted!")
        # ④：将用户和验证码存入数据库
        Captcha.objects.create(phonenumber=phoneNumber, captcha=code)
        # ⑤：准备发送

        client = AcsClient('LTAI4FqSFQ966oE1L5axuUz3', 'GQB89ZbUozzZQnWBLD8ywE35cWlI68', 'cn-hangzhou')

        request = CommonRequest()
        request.set_accept_format('json')
        request.set_domain('dysmsapi.aliyuncs.com')
        request.set_method('POST')
        request.set_protocol_type('https')  # https | http
        request.set_version('2017-05-25')
        request.set_action_name('SendSms')

        request.add_query_param('RegionId', "cn-hangzhou")
        request.add_query_param('PhoneNumbers', phoneNumber)
        request.add_query_param('SignName', "LAB501")
        request.add_query_param('TemplateCode', "SMS_187165006")
        request.add_query_param('TemplateParam', "{\"code\":"+code+"}")


        response = client.do_action(request)

        print(str(response, encoding='utf-8'))
        return JsonResponse({"code": 0, "message": "message sent successfully!"})

        # params = {
        #     "mobile": phoneNumber,
        #     "templateId": "11339",
        #     "paramType": "json",
        #     "params": "{'code':"+code+", 'time':+"+date+"}"
        #     # 国际短信对应的国际编码(非国际短信接入请注释掉该行代码)
        #     # "internationalCode": "对应的国家编码"
        # }
        #
        # ret = self.send(params)
        # print(ret)
        # if ret is not None:
        #     if ret["code"] == 200:
        #         #taskId = ret["result"]["taskId"]
        #         #print ("taskId = %s" % taskId)
        #         print("message sent successfully!")
        #         return JsonResponse({"code": 0, "message": "message sent successfully!"})
        #     else:
        #         print ("ERROR: ret.code=%s,msg=%s" % (ret['code'], ret['msg']))
        #         return JsonResponse({"code": 1, "message": "please try again!"})


    def gen_code(self):

        seeds = "1234567890"
        random_str = []
        for i in range(6):
            random_str.append(random.choice(seeds))
        return "".join(random_str)

    # def send(self, params):
    #     """请求易盾接口
    #     Args:
    #         params (object) 请求参数
    #     Returns:
    #         请求结果，json格式
    #     """
    #     SECRET_ID = "6d07886835fabe1bb96dea4d1602a26d"  # 产品密钥ID，产品标识
    #
    #     BUSINESS_ID = "0fa7d89fb1d54f8e999cd30c46164261"  # 业务ID，易盾根据产品业务特点分配
    #     API_URL = "https://sms.dun.163yun.com/v2/sendsms"
    #     VERSION = "v2"
    #
    #     params["secretId"] = SECRET_ID
    #     params["businessId"] = BUSINESS_ID
    #     params["version"] = VERSION
    #     params["timestamp"] = int(time.time() * 1000)
    #     params["nonce"] = int(random.random() * 100000000)
    #     params["signature"] = self.gen_signature(params)
    #
    #     try:
    #         params = parse.urlencode(params).encode("utf-8")
    #         request = urllib.request.Request(API_URL, params)
    #         content = urllib.request.urlopen(request, timeout=1).read().decode("utf-8")
    #         return json.loads(content)
    #     except Exception as e:
    #         print (e)

    # def gen_signature(self, params=None):
    #     """生成签名信息
    #     Args:
    #         params (object) 请求参数
    #     Returns:
    #         参数签名md5值
    #     """
    #     SECRET_KEY = "1c64010ea951850e7c003658e3aa5dd6"  # 产品私有密钥，服务端生成签名信息使用，请严格保管，避免泄露
    #     buff = ""
    #     for k in sorted(params.keys()):
    #         buff += str(k) + str(params[k])
    #     buff += SECRET_KEY
    #     return hashlib.md5(buff.encode("utf8")).hexdigest()
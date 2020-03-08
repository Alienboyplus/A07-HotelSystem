
from rest_framework.views import APIView
from django.http import JsonResponse
from hotelSystem.models import DiningQrcode

class qrcode(APIView):
    def post(self, request):

        phonenumber = request.data.get("phoneNumber")
        print(phonenumber)

        code_text = DiningQrcode.objects.get(phonenumber=phonenumber).qrcode
        print(code_text)
        return JsonResponse({"code": "0", "msg": "success!", "text": code_text}, status=200)
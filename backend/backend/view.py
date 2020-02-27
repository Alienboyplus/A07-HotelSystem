from django.http import HttpResponse
from django.http import JsonResponse
import json

def hello(request):
    print(request.method)
    if (request.method == 'POST'):
        json_result = json.loads(request.body)
        print(json_result)

    return JsonResponse({"status": 0, "message": "ok!"})



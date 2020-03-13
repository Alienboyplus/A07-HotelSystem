from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import os
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def upload_file(request):
    if request.method == "POST":    # 请求方法为POST时，进行处理
        myFile = request.FILES.get("myfile", None)    # 获取上传的文件，如果没有文件，则默认为None
        if not myFile:
            return JsonResponse({"code":0, "message":"you haven't choose your file"})
        destination = open(os.path.join("D:\\upload",myFile.name),'wb+')    # 打开特定的文件进行二进制的写操作
        for chunk in myFile.chunks():      # 分块写入文件
            destination.write(chunk)
        destination.close()
        return JsonResponse({"code":1, "message":"upload over!"})
    else:
        return JsonResponse({"code":2, "message":"unexpected error!"})
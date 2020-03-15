from django.http import HttpResponse
from django.http import JsonResponse
from django.http import JsonResponse
from hotelSystem import models
from hotelSystem.models import uploadImage
from .tools import *
from .ocr import do_ocr
from django.conf import settings
import json

def hello(request):
    print(request.method)
    if (request.method == 'POST'):
        json_result = json.loads(request.body)
        print(json_result)

    return JsonResponse({"status": 0, "message": "ok!"})


# Create your views here.
def uploadImg(request):
    if request.method == "POST":
        file = request.FILES.get('img')
        md5 = GetFileMd5(file)
        imgobj = models.uploadImage.objects.filter(imgMd5=md5)
        if not imgobj:
            size = file.size
            # if not FileSize(size):
            #     info = {'code': 403, 'error': '文件太大!'}
            #     return JsonResponse(info)
            ext = os.path.splitext(file.name)[1]
            if not JudgeType(ext):
                info = {'code': 403, 'error': '文件类型错误！'}
                return JsonResponse(info)
            path = Rename(file)
            name = os.path.basename(path)
            create = models.uploadImage.objects.create(imgName=name, imgMd5=md5, imgType=ext, imgSize=size,
                                                       imgPath=path)
            url = 'http://' + settings.HOST_NAME + "/" + create.imgPath
            do_ocr(url)
            info = {'code': 200, 'imgurl': url}
            return JsonResponse(info)
        else:
            url = 'http://' + settings.HOST_NAME + "/" + imgobj.first().imgPath
            info = {'code': 200, 'imgurl': url}
            return JsonResponse(info)



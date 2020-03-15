import os, time, random, hashlib, datetime
from django.conf import settings


# 计算文件的md5
def GetFileMd5(file):
    md5Obj = hashlib.md5()
    for chunk in file.chunks():
        md5Obj.update(chunk)
    return md5Obj.hexdigest()


# 文件重命名及写入
def Rename(file):
    times = time.strftime('%Y%m%d%H%M%S')
    ran = random.randint(0, 1000)
    ext = os.path.splitext(file.name)[1]
    newfile = "{}{}{}".format(times, ran, ext)
    path = os.path.join('D:/upload/', newfile).replace('\\', '/')
    read = open(path, 'wb+')
    for chunk in file.chunks():
        read.write(chunk)
    read.close()
    return path


# 检测文件类型
def JudgeType(ext):
    ImageType = [".png", ".jpeg", ".jpg", ".gif", ".bmp"]
    if ext in ImageType:
        return True
    return False


# 限制文件大小
# def FileSize(size):
#     limit = settings.IMAGE_SIZE_LIMIT
#     if size < limit:
#         return True
#     return False

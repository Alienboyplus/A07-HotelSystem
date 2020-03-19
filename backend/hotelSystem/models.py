from django.db import models
import datetime

class UserFaceInfo(models.Model):
    user_name = models.CharField(max_length=16, blank=True, null=True)
    password = models.CharField(max_length=16)
    face_id = models.CharField(max_length=31, blank=True, null=True)
    name = models.CharField(max_length=63, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    gender = models.SmallIntegerField(blank=True, null=True)
    phone_number = models.CharField(unique=True, max_length=11)
    face_feature = models.TextField(blank=True, null=True)
    fpath = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user_face_info'

class DiningQrcode(models.Model):
    phonenumber = models.CharField(max_length=45)
    qrcode = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'dining_qrcode'

class uploadImage(models.Model):
    imgName = models.CharField(max_length=252, default="", verbose_name="文件名")
    imgMd5 = models.CharField(max_length=128, verbose_name="MD5值")
    imgType = models.CharField(max_length=32, verbose_name="类型")
    imgSize = models.IntegerField(verbose_name="大小")
    imgPath = models.CharField(max_length=128, verbose_name="图片路径")
    imgCreated = models.CharField(max_length=64, default=datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                                  verbose_name="创建时间")

    # imgUpdated = models.CharField(max_length=64,default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),verbose_name="更新时间")

    def __str__(self):
        return self.imgName

    class Meta:
        managed = True
        db_table = 'uploadImage'

class Captcha(models.Model):
    phonenumber = models.CharField(max_length=45)
    captcha = models.CharField(max_length=6)

    class Meta:
        managed = False
        db_table = 'captcha'

# Create your models here.

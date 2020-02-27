from django.db import models

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


# Create your models here.

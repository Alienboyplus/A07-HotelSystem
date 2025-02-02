# Generated by Django 3.0.3 on 2020-03-15 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotelSystem', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='uploadImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgName', models.CharField(default='', max_length=252, verbose_name='文件名')),
                ('imgMd5', models.CharField(max_length=128, verbose_name='MD5值')),
                ('imgType', models.CharField(max_length=32, verbose_name='类型')),
                ('imgSize', models.IntegerField(verbose_name='大小')),
                ('imgPath', models.CharField(max_length=128, verbose_name='图片路径')),
                ('imgCreated', models.CharField(default='2020-03-15 10:45:06', max_length=64, verbose_name='创建时间')),
            ],
            options={
                'db_table': 'uploadImage',
            },
        ),
    ]

"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.views.static import serve
from django.conf.urls import url, include
from django.urls import path
from rest_framework.routers import DefaultRouter
from . import view, register, LogIn, dining_qrcode, uploadPics, captcha, translation
from hotelSystem import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/',view.hello),
    path('do_register/', register.do_register.as_view()),
    path('do_login/', LogIn.do_login.as_view()),
    path('do_qrcode/', dining_qrcode.qrcode.as_view()),
    path('do_upload/', uploadPics.upload_file),
    path('gen_captcha/', captcha.gen_captcha.as_view()),
    path('translate/', translation.do_translate.as_view()),
    url(r'uploadimage/$', view.uploadImg),
    url(r'^D:/upload/(?P<path>.*)$', serve, {'document_root': 'D:/upload'})
    #url(r'^captcha/', include('captcha.urls')),
]

router = DefaultRouter()
router.register(r'userinfo',views.UserFaceViewSet)
router.register(r'register', views.registerViewSet)
router.register(r'qrcode', views.DiningQrcodeViewSet)
urlpatterns += router.urls
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
from django.conf.urls import url, include
from django.urls import path
from rest_framework.routers import DefaultRouter
from . import view, register, login, dining_qrcode
from hotelSystem import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/',view.hello),
    path('do_register/', register.do_register.as_view()),
    path('do_login/', login.do_login.as_view()),
    path('do_qrcode/', dining_qrcode.qrcode.as_view()),
    url(r'^captcha/', include('captcha.urls')),
]

router = DefaultRouter()
router.register(r'userinfo',views.UserFaceViewSet)
router.register(r'register', views.registerViewSet)
router.register(r'qrcode', views.DiningQrcodeViewSet)
urlpatterns += router.urls
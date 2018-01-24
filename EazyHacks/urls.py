"""EazyHacks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.urls import path
from EazyHacks import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', views.openLogin, name='login'),
    url(r'^AddHack.html/', views.openAddHack, name='add_hack'),
    url(r'^BrowseHack.html/', views.openBrowseHack, name='browse_hack'),
    url(r'^HackDetails.html/(?P<hack_id>[0-9]+)/', views.openHackDetails, name='hack_details'),
    url(r'^HackDetails.html/', views.openLogin ,name='hack_base'),

]

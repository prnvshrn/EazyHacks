from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

# Global variable definition
username = ""


def openLogin(request):
    global username
    template = loader.get_template('first.html')
    if request.method == 'POST':
        print(request.POST.get("UserNameTextField"))
        username = request.POST.get("UserNameTextField")
    context = {'username':username}
    return HttpResponse(template.render(context, request))

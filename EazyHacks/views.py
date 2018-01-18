from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

# Global variable definition
username = ""
username_set = False

def openLogin(request):
    global username,username_set
    template = loader.get_template('first.html')
    if request.method == 'POST':
        username_set = True
        username = request.POST.get("UserNameTextField")
    context = {'username':username, 'username_set':username_set}
    return HttpResponse(template.render(context, request))


def openAddHack(request):
    template = loader.get_template('add_hack.html')
    global username
    hacks = []
    if request.method == 'POST':
        print(request.POST.get("HackDetails"))
        temp = request.POST.get("HackDetails")
        hacks = temp.split(";")
        for i in hacks:
            print(i)
        print(len(hacks))
    context = {'username':username}
    return HttpResponse(template.render(context,request))
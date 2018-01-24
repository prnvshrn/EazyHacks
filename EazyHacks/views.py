from __future__ import unicode_literals

import json
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import HackOverview, HackDetails

# Global variable definition
username = ""
username_set = False

def openLogin(request):
    global username,username_set

    test = HackDetails.objects.values_list('Hack_id','Hack_step')
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
        print(request.POST.get("CategoryList") , request.POST.get("TitleTextBox"))
        temp = request.POST.get("HackDetails")
        hack_overview = HackOverview(title=request.POST.get("TitleTextBox"), username=username ,category=request.POST.get("CategoryList"))
        hack_overview.save()
        hacks = temp.split(";")
        hacks = hacks[:-1]
        for i in hacks:
            hack_details = HackDetails(Hack_step=i,Hack_id=hack_overview)
            hack_details.save()
        print(len(hacks))
    context = {'username':username}
    return HttpResponse(template.render(context,request))


def openBrowseHack(request):
    template = loader.get_template('browse_hacks.html')
    hacks_list = HackOverview.objects.all()
    title_list = list(HackOverview.objects.values_list('Hack_id','category','title','username'))
    print(title_list)
    title_list = json.dumps(title_list)
    context = {'username':username, 'hacks_list':title_list}
    return HttpResponse(template.render(context,request))


def openHackDetails(request, hack_id):
    template = loader.get_template('hack_details.html')
    overview = HackOverview.objects.all().get(Hack_id=hack_id)
    hack_details = HackDetails.objects.all().filter(Hack_id=hack_id).values_list('Hack_id','Hack_step')
    hack_steps = list(HackDetails.objects.all().filter(Hack_id=hack_id).values_list('Hack_id', 'Hack_step'))
    hack_steps_final = []
    for i in hack_steps:
        hack_steps_final.append(i[1])
    print(hack_steps_final)
    context = {'overview': overview, 'hack_details':hack_details, 'hack_steps': hack_steps_final}
    return HttpResponse(template.render(context, request))
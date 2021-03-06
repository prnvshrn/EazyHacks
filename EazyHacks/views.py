from __future__ import unicode_literals

import json
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.template import loader
from .models import HackOverview, HackDetails, users
from django.urls import reverse
from django.contrib import messages

# Global variable definition
username = ""


def openLogin(request):
    global username
    username_set = False
    print(request.session)
    test = HackDetails.objects.values_list('Hack_id','Hack_step')
    template = loader.get_template('first.html')
    context = {'username': '', 'username_set': username_set}

    if 'username' in request.session.keys():
        username_set = True
        context.update({'username': request.session['username'], 'username_set': username_set})

    if request.method == 'POST':
        if 'LoginButton' in request.POST:
            try:
                temp_username = users.objects.get(username=request.POST.get("UserNameTextField"))
                if temp_username.password == request.POST.get("PasswordTextField"):
                    username_set = True
                    request.session['username'] = request.POST.get("UserNameTextField")
                    username = request.POST.get("UserNameTextField")
                    context.update({'username': request.session['username'], 'username_set': username_set})
                else:
                    messages.add_message(request, messages.ERROR, 'Your username and password did not match')
            except users.DoesNotExist:
                messages.add_message(request, messages.ERROR, 'The username does not exists. Please sign up')
            except users.MultipleObjectsReturned:
                messages.add_message(request, messages.ERROR, 'Something wrong happened. Please select a different username.')
        if 'SignUpButton' in request.POST:
            checkUserExists = users.objects.all().filter(username=request.POST.get("UserNameTextField")).values()
            if checkUserExists:
                messages.add_message(request, messages.ERROR, 'Username already in use. Please select a different one.')
            else:
                userInstance = users(username=request.POST.get("UserNameTextField"),password=request.POST.get("PasswordTextField"))
                userInstance.save()
                username_set = True
                request.session['username'] = request.POST.get("UserNameTextField")
                username = request.POST.get("UserNameTextField")
                context.update({'username':request.session['username'], 'username_set':username_set})
    return HttpResponse(template.render(context, request))


def openAddHack(request):
    template = loader.get_template('add_hack.html')
    global username
    hacks = []
    if request.method == 'POST':
        print(request.POST.get("CategoryList") , request.POST.get("TitleTextBox"))
        temp = request.POST.get("HackDetails")
        hack_overview = HackOverview(title=request.POST.get("TitleTextBox"), username=request.session['username'] ,category=request.POST.get("CategoryList"))
        hack_overview.save()
        hacks = temp.split(";")
        hacks = hacks[:-1]
        for i in hacks:
            hack_details = HackDetails(Hack_step=i,Hack_id=hack_overview)
            hack_details.save()
        print(len(hacks))
    context = {'username':request.session['username']}
    return HttpResponse(template.render(context,request))


def openBrowseHack(request, hack_type):
    template = loader.get_template('browse_hacks.html')
    hacks_list = HackOverview.objects.all()
    title_list = list(HackOverview.objects.values_list('Hack_id','category','title','username'))
    if hack_type=='1':
        print("Sports")
        title_list = list(HackOverview.objects.all().filter(category='Sports').values_list('Hack_id', 'category', 'title', 'username'))
    if hack_type=='2':
        title_list = list(HackOverview.objects.all().filter(category='Kitchen').values_list('Hack_id', 'category', 'title', 'username'))
    if hack_type=='3':
        title_list = list(HackOverview.objects.all().filter(category='Fitness').values_list('Hack_id', 'category', 'title', 'username'))
    if hack_type=='4':
        title_list = list(HackOverview.objects.all().filter(category='Gaming').values_list('Hack_id', 'category', 'title', 'username'))
    if hack_type=='5':
        title_list = list(HackOverview.objects.all().filter(category='Daily Life').values_list('Hack_id', 'category', 'title', 'username'))
    if hack_type=='6':
        title_list = list(HackOverview.objects.all().filter(category='Miscellaneous').values_list('Hack_id', 'category', 'title', 'username'))
    title_list = json.dumps(title_list)
    context = {'username':request.session['username'], 'hacks_list':title_list}
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
    context = {'overview': overview, 'hack_details':hack_details, 'hack_steps': hack_steps_final, 'username': request.session['username']}
    return HttpResponse(template.render(context, request))


def logOut(request):
    if 'username' in request.session.keys():
        del request.session['username']
    username_set = False
    return HttpResponseRedirect(reverse('login', args=()))
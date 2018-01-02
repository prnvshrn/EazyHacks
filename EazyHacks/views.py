from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

def openLogin(request):
    template = loader.get_template('first.html')
    context = {}
    return HttpResponse(template.render(context, request))

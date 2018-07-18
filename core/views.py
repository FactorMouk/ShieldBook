from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def login(request):
    template_login = loader.get_template('login/login.html')
    return HttpResponse(template_login.render())

def home(request):
    template_home = loader.get_template('dashboard/home.html')
    return HttpResponse(template_home.render())

def shields(request):
    template_shields = loader.get_template('dashboard/shields.html')
    return HttpResponse(template_shields.render())

def createShield(request):
    template_create = loader.get_template('dashboard/create.html')
    return HttpResponse(template_create.render())

def popular(request):
    template_popular = loader.get_template('dashboard/popular.html')
    return HttpResponse(template_popular.render())

def news(request):
    template_news = loader.get_template('dashboard/news.html')
    return HttpResponse(template_news.render())

def releases(request):
    template_releases = loader.get_template('dashboard/releases.html')
    return HttpResponse(template_releases.render())

def contact(request):
    template_contact = loader.get_template('dashboard/contact.html')
    return HttpResponse(template_contact.render())

def about(request):
    template_about = loader.get_template('dashboard/about.html')
    return HttpResponse(template_about.render())

def settings(request):
    template_settings = loader.get_template('dashboard/settings.html')
    return HttpResponse(template_settings.render())
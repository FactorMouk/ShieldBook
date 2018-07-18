from django.shortcuts import render

def login(request):
    return render(request, 'login/login.html')

def home(request):
    return render(request, 'dashboard/home.html')

def shields(request):
    return render(request, 'dashboard/shields.html')

def createShield(request):
    return render(request, 'dashboard/create.html')

def popular(request):
    return render(request, 'dashboard/popular.html')

def news(request):
    return render(request, 'dashboard/news.html')

def releases(request):
    return render(request, 'dashboard/releases.html')

def contact(request):
    return render(request, 'dashboard/contact.html')

def about(request):
    return render(request, 'dashboard/about.html')

def settings(request):
    return render(request, 'dashboard/settings.html')
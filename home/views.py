from django.shortcuts import render

def index(request):
    return render(request,'index.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')

def music(request):
    return render(request, 'music.html')
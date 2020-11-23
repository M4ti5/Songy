from django.shortcuts import render ,redirect
# Create your views here.
from django.http import HttpResponse
from .models import Post
from django import forms

def post_list(request):
    lang = request.GET.get('lang')
    if not lang:
        temp="Fra"
    if lang in ["Fra","Eng","Ita","Esp"]:
        temp = lang
        print(temp)
    else:
        temp="Fra"
    posts = Post.objects.order_by('created_date').reverse()
    return render(request, 'blog/index.html', {'posts': posts ,'path':'', 'lang': temp , 'title':'Home'} )

def who(request):
    lang = request.GET.get('lang')
    if not lang:
        temp="Fra"
    if lang in ["Fra","Eng","Ita","Esp"]:
        temp = lang
        print(temp)
    else:
        temp="Fra"
    return render(request, 'blog/who.html',{'lang': lang ,'path':'/who','title':'Who'})

def conatct(request):
   lang = request.GET.get('lang')
   if not lang:
       temp="Fra"
   if lang in ["Fra","Eng","Ita","Esp"]:
       temp = lang
       print(temp)
   else:
       temp="Fra"
   return render(request, 'blog/contact.html',{'lang': lang ,'path':'/contact','title':'Contact'})
   


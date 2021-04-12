from django.shortcuts import render
from .forms import PostForm
import os
import mimetypes
from django.http import StreamingHttpResponse
from wsgiref.util import FileWrapper


def landing(request):
    #return render_to_response('index.html')
    return render(request, 'index.html', locals())

def search(request):
    #return render_to_response('index.html')
    return render(request, 'search.html', locals())

def projects(request):
    #return render_to_response('index.html')
    return render(request, 'projects.html', locals())

def study(request):
    #return render_to_response('index.html')
    return render(request, 'study.html', locals())

def news(request):
    #return render_to_response('index.html')
    return render(request, 'news.html', locals())

def news_first(request):
    #return render_to_response('index.html')
    return render(request, 'news/first_new.html', locals())

def events(request):
    #return render_to_response('index.html')
    return render(request, 'events.html', locals())

def feedback(request):
    #return render_to_response('index.html')
    form = PostForm(request.POST or None)

    if request.method == "POST" and form.is_valid():
        #print(form.cleaned_data)
        new_form = form.save()
        form = PostForm(request.POST or None)
    return render(request, 'feedback.html', locals())
    #return render(request, 'feedback2.html', locals())

def anketa_zotov(request):
    #return render_to_response('index.html')
    return render(request, 'anketa.html', locals())




def download_file(request):
   the_file = "C:\\Users\\ILYA\\Downloads\\task_8.zip"
   filename = os.path.basename(the_file)
   chunk_size = 8192
   response = StreamingHttpResponse(FileWrapper(open(the_file, 'rb'), chunk_size),
                           content_type=mimetypes.guess_type(the_file)[0])
   response['Content-Length'] = os.path.getsize(the_file)
   response['Content-Disposition'] = "attachment; filename=%s" % filename
   return response

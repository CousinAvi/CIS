from django.conf.urls import url
from landing import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.landing, name='landing'),
    path('search', views.search, name='search'),
    path('study', views.study, name='study'),
    path('landing', views.landing, name=''),
    path('feedback', views.feedback, name='feedback'),
    path('news', views.news, name='news'),
    path('news_first', views.news_first, name='news_first'),
    path('events', views.events, name='events'),
    path('projects', views.projects, name='projects'),
    path('load', views.download_file, name='load'),
    path('search/anketa_zotov', views.anketa_zotov, name='anketa_zotov'),

] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)

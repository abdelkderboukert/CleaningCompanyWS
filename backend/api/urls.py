from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

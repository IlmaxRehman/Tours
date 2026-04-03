from django.shortcuts import render
from rest_framework import generics

from .models import Tour
from .serializers import TourSerializer

from .models import BlogPost
from .serializers import BlogPostSerializer


# Create your views here.
class TourListView(generics.ListAPIView):
    queryset = Tour.objects.filter(is_active=True)
    serializer_class = TourSerializer

class TourDetailView(generics.RetrieveAPIView):
    queryset = Tour.objects.filter(is_active=True)
    serializer_class = TourSerializer
    lookup_field = 'slug'

class BlogListView(generics.ListAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer


class BlogDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    lookup_field = "slug"
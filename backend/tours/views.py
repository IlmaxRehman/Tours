from django.shortcuts import render
from rest_framework import generics

from .models import Tour
from .serializers import TourSerializer

from .models import BlogPost
from .serializers import BlogPostSerializer

from .models import Booking
from .serializers import BookingSerializer



# Create your views here.
class TourListView(generics.ListAPIView):
    serializer_class = TourSerializer

    def get_queryset(self):
        queryset = Tour.objects.filter(is_active=True)
        city = self.request.query_params.get("city")

        if city:
            queryset = queryset.filter(city__icontains=city)

        return queryset
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

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
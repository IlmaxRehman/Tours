from django.contrib import admin

# Register your models here.
from .models import Tour, BlogPost, Booking

admin.site.register(Tour)
admin.site.register(BlogPost)
admin.site.register(Booking)
from django.contrib import admin

# Register your models here.
from .models import Tour, BlogPost

admin.site.register(Tour)
admin.site.register(BlogPost)
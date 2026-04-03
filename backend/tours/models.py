from django.db import models

# Create your models here.
class Tour(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=50)

    description = models.TextField()

    itinerary = models.TextField()

    hero_image = models.URLField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_created=True)

class BlogPost(models.Model):

    title = models.CharField(max_length=200)

    slug = models.SlugField(unique=True)

    content = models.TextField()

    featured_image = models.URLField()

    created_at = models.DateTimeField(auto_now_add=True)

    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title

from django.db import models


class Tour(models.Model):

    CITY_CHOICES = [
        ("agra", "Agra"),
        ("delhi", "Delhi"),
        ("jaipur", "Jaipur"),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    city = models.CharField(
        max_length=20,
        choices=CITY_CHOICES
    )

    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=50)

    description = models.TextField()
    itinerary = models.TextField()

    hero_image = models.ImageField(upload_to="tours/")

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class BlogPost(models.Model):

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    content = models.TextField()
    featured_image = models.URLField()

    created_at = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    
class Booking(models.Model):

    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)

    travel_date = models.DateField()
    travellers = models.IntegerField(default=1)

    message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.tour.name}"
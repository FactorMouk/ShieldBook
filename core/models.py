from django.db import models

# Create your models here.

class CarouselLoginImage(models.Model):
    title = models.CharField(max_length=100, default='Without title')
    image = models.ImageField(upload_to='login/carousel/')
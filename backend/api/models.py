from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

class Plant(models.Model):
    name = models.CharField(max_length=255)
    price = models.ImageField()
    description = models.TextField()
    photo = models.ImageField(upload_to='plants_photos')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
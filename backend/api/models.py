from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

class Plant(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    description = models.TextField()
    photo = models.ImageField(upload_to='plants_photos')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

class User(models.Model):
    name = models.CharField(max_length=40)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

class Basket(models.Model):
    plants = models.ManyToManyField(Plant)

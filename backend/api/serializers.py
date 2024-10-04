from rest_framework import serializers
from .models import Category, Plant

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ['id', 'name', 'price', 'description', 'photo','category']

    def get_photo(self, obj):
        request = self.context.get('request')
        photo_url = Plant.photo.url
        return request.build_absolute_uri(photo_url, port=8000)

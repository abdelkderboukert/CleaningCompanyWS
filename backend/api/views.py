from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.request import Request
from django.db.models import F,Q
from datetime import date
from rest_framework import viewsets, filters
import os
from django.http import HttpResponse
from datetime import datetime
from django.db.models import F
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import *


class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        data = []
        for category in categories:
            plants = Plant.objects.filter(category=category)
            category_serializer = CategorySerializer(category)
            plants_serializer = PlantSerializer(plants, many=True)
            data.append({
                'category': category_serializer.data,
                'plants': plants_serializer.data
            })
        return Response(data)
    
class CategoryDetailView(APIView):
    def get(self, request, pk):
        category = Category.objects.get(pk=pk)
        plants = Plant.objects.filter(category=category)
        category_serializer = CategorySerializer(category)
        plants_serializer = PlantSerializer(plants, many=True)
        data = {
            'category': category_serializer.data,
            'plants': plants_serializer.data
        }
        return Response(data)
    

class PlantListView(APIView):
    def get(self, request):
        ids = request.query_params.get('ids', None)
        if ids is None:
            return Response({'error': 'ids query parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        ids = [int(id) for id in ids.split(',')]
        plant_list = []
        for id in ids:
            plant = Plant.objects.filter(id=id).first()
            if plant:
                serializer = PlantSerializer(plant)
                plant_list.append(serializer.data)
        
        return Response(plant_list)
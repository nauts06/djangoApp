from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Product 
from .serializer import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


@api_view(['GET' , 'POST'])
def product(request):
    if request.method =='GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET','DELETE'])
def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    
    except Product.DoesNotExist:

        return Response({
            "message": "Product not found"
        })
    
    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        product.delete()
        return Response({
               "message": "Product deleted"
        })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        "message": "Welcome Rudra 😎",
        "user": request.user.username
    })
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from authentication.serializers import UserSerializer, UserProfileSerializer


# Create your views here.

class UserCreateView(generics.CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

# Django built-in User model
from django.contrib.auth.models import User

# DRF serializer classes
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):

    # Password input hoga
    # write_only means response me password nahi aayega
    password = serializers.CharField(write_only=True)

    class Meta:

        # Kis model ke liye serializer?
        model = User

        # Kaunse fields allow karne hain?
        fields = [
            "username",
            "email",
            "password"
        ]

    def create(self, validated_data):

        """
        serializer.save()
        ke time ye method call hoga
        """

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"]
        )

        return user
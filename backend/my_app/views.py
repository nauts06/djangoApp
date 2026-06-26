from rest_framework.decorators import ( api_view , permission_classes )
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import RegisterSerializer


@api_view(["POST"])
def register(request):
    # Frontend se data receive
    serializer = RegisterSerializer(
        data=request.data
    )
    # Validation pass?
    if serializer.is_valid():
        # User create
        serializer.save()

        return Response({
            "message": "User Registered Successfully"
        })

    # Validation failed
    return Response(
        serializer.errors,
        status=400
    )


@api_view(["GET"])
# Login required
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        # Current logged-in user
        "id": request.user.id,
        "username": request.user.username,
        "email": request.user.email
    })
from rest_framework.decorators import api_view
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
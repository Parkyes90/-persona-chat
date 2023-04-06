from django.contrib.auth import login
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed

from apps.users.models import User


class V1SignUpUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password"]
        extra_kwargs = {"password": {"write_only": True, "min_length": 8}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class V1LoginUserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data["email"])
        except User.DoesNotExist:
            raise AuthenticationFailed()
        if not user.check_password(validated_data["password"]):
            raise AuthenticationFailed()
        login(self.context["request"], user)
        return user

    def update(self, instance, validated_data):
        pass

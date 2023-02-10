from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse

from . import utils

def index(request):
    text = request.GET.get('text')
    print(text)
    return render(request, "index.html")

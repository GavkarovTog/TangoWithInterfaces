from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    text = request.POST.get('text')
    print(text)
    return render(request, "index.html")

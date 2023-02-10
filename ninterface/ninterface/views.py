from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse

from . import utils

def index(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    if is_ajax:
        if request.method == 'GET':
            return JsonResponse({'context': 14})
        
        return JsonResponse({'status': 'Invalid request'}, status=400)
    else:
        return render(request, "index.html")

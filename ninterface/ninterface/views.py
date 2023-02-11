from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from . import utils
from .forms import FileForm

@csrf_exempt
def index(request):
    form = None

    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)

        if form.is_valid():
            with open("tmp.pdf", "wb") as pdf:
                for chunk in request.FILES["file"]:
                    pdf.write(chunk)

            info = utils.get_info("tmp.pdf")
            return JsonResponse(info, safe=False);

        return render(request, "index.html", {'form': form})

    else:
        form = FileForm()
        return render(request, "index.html", {'form': form})

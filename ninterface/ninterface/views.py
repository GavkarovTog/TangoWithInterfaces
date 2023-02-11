from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from . import utils
from .forms import FileForm

@csrf_exempt
def index(request):
    form = None
    print(request.method)

    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)

        print(request.FILES)

        with open("tmp.pdf", "wb") as pdf:
            for chunk in request.FILES["file"]:
                pdf.write(chunk)

            info = utils.get_info("tmp.pdf")
            return JsonResponse({"test", "text"}, status=200);

        # else:
        #     print(1)
        #     return JsonResponse("test", safe=False, status=400);

    else:
        form = FileForm()
        return render(request, "index.html", {'form': form})

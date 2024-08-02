import json
import os
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse



def home(request):

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    portfolio_data_file_path = os.path.join(BASE_DIR, 'personal_portfolio/portfolio_data', 'portfolio.json' )

    with open(portfolio_data_file_path) as json_file:
        portfolio = json.load(json_file)

    return JsonResponse({'portfolio': portfolio})

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrf_token': token})

@csrf_exempt
def sendmessage(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        yourmessage = request.POST.get('message')
        csrftoken = request.POST.get('csrftoken')

        subject = f'Email From: {name} - {email} '
        body = f"From: {name} - {email} \n\n{yourmessage}\n\n{name}\n{email}"
        to_email = ['ridmi.portfolio@gmail.com']
        responsMessage = f"Thank you for sending a message {name}."

        send_mail(subject, body, settings.EMAIL_HOST_USER, to_email)

        return JsonResponse({'message': responsMessage})
    else:
        return JsonResponse({'error': 'Invalid Request Method'}, status = 400)

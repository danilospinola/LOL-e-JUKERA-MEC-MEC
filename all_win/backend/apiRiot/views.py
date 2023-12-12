from django.shortcuts import render,HttpResponse
import requests
# Create your views here.
linkApi = 'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id'
Apikey = 'RGAPI-74a3c806-43bf-4846-94ed-8609970861ed'

def getPlayerById(objectRequest):
    tagline = 'BR1'
    gameName = 'NINJAKINGDOM'

    riotApi = requests.get(f'{linkApi}/{gameName}/{tagline}?api_key={Apikey}')
    return HttpResponse(riotApi)
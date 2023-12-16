from django.shortcuts import render, HttpResponse
import requests
from parse import *

# Create your views here.
linkApi = 'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id'
Apikey = 'RGAPI-c480b5e8-1a2f-42b3-8cb0-27d77ee4dc9e'

def getPlayerById(objectRequest):
    tagline = 'BR1'
    gameName = 'NINJAKINGDOM'

    riotApi = requests.get(f'{linkApi}/{gameName}/{tagline}?api_key={Apikey}') 
    string = str(riotApi.content, encoding='utf-8')#Transforma a response em string
    puuid = search('puuid":"{}"', string)#Procura o Puuid na string
    return HttpResponse(puuid[0])
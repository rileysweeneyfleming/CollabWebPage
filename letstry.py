import requests

url = "https://kobo.humanitarianresponse.info/api/v2/assets//anpv3H2CEtV6PzAcyfDgE6/data/?format=geojson"

payload={}
headers = {
  'Authorization': 'Basic ZnJ1aXR0cmVlbWFwOkZvb2RTZWN1cml0eTIwMjE='
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

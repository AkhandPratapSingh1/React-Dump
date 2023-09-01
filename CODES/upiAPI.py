import requests

url = "https://production.deepvue.tech/v1/verification/upi?vpa=<UPIHANDLE>"

payload={}
headers = {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmcmVlX3RpZXJfc2ltcGxpcm0wODEyX2E0OTA3MTg3MzQiLCJleHAiOjE2OTEzMDU4NjB9.svahZEowNJDoVx32iun7-kXNNgUjjspveVtYqyimoAY',
    'x-api-key': 'free_tier_simplirm0812_a490718734',
}
response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
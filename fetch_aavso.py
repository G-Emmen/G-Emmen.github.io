import json
import os
import urllib.request
from bs4 import BeautifulSoup

URL = "https://apps.aavso.org/exosite/?obscode=EGRA&in_notes=&star_name=&exoplanet_name=&start_date=&end_date=&results_per_page=&search=true"  # Update with your exact AAVSO URL
req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    
    span = soup.find('span', class_='text-info')
    value = span.get_text(strip=True) if span else "Not found"
except Exception:
    value = "Unavailable"

os.makedirs("docs", exist_ok=True)
with open("docs/num_contributions.json", "w") as f:
    json.dump({"value": value}, f)

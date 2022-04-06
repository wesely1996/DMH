#!/usr/bin/env python
import json
from urllib.request import urlopen

section = "weapon-properties"
writeFile = "weaponProperties.json"

url = "https://www.dnd5eapi.co/api/" + section

response = urlopen(url)
objects = json.loads(response.read())

f = open("C:/Users/nikol/Desktop/Projects/DMH/dmh/src/Data/" + writeFile, "w+")
f.write("[\n")

for i in range(objects["count"]):
    print(i)
    newurl = url + '/' + objects["results"][i]["index"]
    newResponse = urlopen(newurl)
    res = json.loads(newResponse.read())
    if i > 0:
        f.write(',\n')
    f.write(json.dumps(res))
    
f.write("\n]")
f.close()
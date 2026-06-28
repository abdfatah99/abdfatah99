---
date: 22/05/2025
description: Fatah Personal Notes
---

# About Fatah Personal Notes

Officia ad esse labore minim nulla et voluptate proident deserunt. Magna laborum pariatur ipsum minim mollit cupidatat laborum laboris. Eiusmod dolor enim consequat enim mollit consectetur proident commodo quis cillum officia ipsum. Aliqua excepteur sint ipsum aliqua officia aliqua eu elit eu aute. Commodo proident dolor adipisicing incididunt ea laborum adipisicing id. Amet pariatur officia cillum exercitation sunt duis. Nulla minim laborum culpa enim sint veniam aute voluptate ipsum excepteur culpa.

```python showLineNumbers /urllib/2#mySpecialHighlight
#!/usr/local/bin/python

# change above line to point to local
# python executable

import urllib, urlparse, string, time


# create URL with desired search parameters

url = "http://archive.stsci.edu/pointings/search.php?"
url = url + "primary=ACS&outputformat=CSV"
url = url + "&pnt_ucountp=%3C5&pnt_icountp=%3E1&bao=and"
url = url + "&galactic=Above&galsearch=75"
url = url + "&action=Search+Exposures"

print url

# retrieve URL and  write results to filename

filename = "out_py.txt"

urllib.urlretrieve(url,filename)

### Done!
```

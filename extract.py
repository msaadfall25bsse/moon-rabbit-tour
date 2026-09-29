import re

with open('tour.html', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'https://moonrabbit.pk/wp-content/uploads/[^"\'\s]+\.(?:jpg|jpeg|png)', content)
unique_matches = set(matches)
for match in unique_matches:
    print(match)

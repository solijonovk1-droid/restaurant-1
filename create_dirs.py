import os

base_dir = r"c:\Users\user\Desktop\restaurantapp\app"
folders = [
    "(tabs)",
    "restaurant"
]

if not os.path.exists(base_dir):
    os.makedirs(base_dir)

for folder in folders:
    path = os.path.join(base_dir, folder)
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created: {path}")

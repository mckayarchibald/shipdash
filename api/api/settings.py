import os
import environ
from pathlib import Path
from django.conf import settings


env = environ.Env()
environ.Env.read_env()

DB_PASSWORD = env('DB_PASSWORD')

BASE_DIR = Path(__file__).resolve().parent.parent

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'shipdash',    
        'USER': 'admin',      
        'PASSWORD': DB_PASSWORD,
        'HOST': 'localhost',   
        'PORT': '5432',             
    }
}

ALLOWED_HOSTS = ['*']
ROOT_URLCONF = 'shipdash.urls'
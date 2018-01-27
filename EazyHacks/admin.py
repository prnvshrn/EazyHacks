from django.contrib import admin
from .models import HackOverview, HackDetails, users

admin.site.register(HackOverview)
admin.site.register(HackDetails)
admin.site.register(users)
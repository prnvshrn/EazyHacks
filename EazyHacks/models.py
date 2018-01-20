from __future__ import unicode_literals
from django.db import models


class HackOverview(models.Model):
    Hack_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    username = models.CharField(max_length=50)


class HackDetails(models.Model):
    Hack_id = models.ForeignKey(HackOverview, on_delete=models.CASCADE)
    Hack_step = models.CharField(max_length=100)

    def __str__ (self):
        show = self.Hack_id
        return show
from django.conf import settings
from django.db import models
class EMPRESA(models.Model):
    'Generated Model'
    id_empresa = models.IntegerField(null=True,blank=True,)
    direccion = models.TextField(null=True,blank=True,)
    nombre = models.CharField(max_length=180,null=True,blank=True,)

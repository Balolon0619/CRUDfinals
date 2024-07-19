
from django.db import models


class Item(models.Model):
    firstname = models.CharField(max_length=100)
    middlename = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_num = models.CharField(max_length=100)
    address = models.TextField(max_length=100)
    birthday = models.DateField(max_length=100)
    age = models.CharField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100)
    city = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=100)
    religion= models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    height = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    blood_type = models.CharField(max_length=100, null=True)
    mothers_maiden_firstname = models.TextField(max_length=100)
    mothers_maiden_surname = models.TextField(max_length=100, null=True)
    mothers_ocupation = models.CharField(max_length=100, null=True)
    father_firstname = models.CharField(max_length=100)
    father_surname = models.CharField(max_length=100, null=True)
    father_occupation = models.CharField(max_length=100, null=True)
    elementary_school = models.CharField(max_length=100, null=True)
    high_school= models.CharField(max_length=100, null=True)
    college = models.CharField(max_length=100, null=True)


    def __str__(self):
        return self.firstname  

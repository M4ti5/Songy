from django.db import models

from django.utils import timezone

# Create your models here.

#supprimeer la base de donée existant 

class Post(models.Model):
    author = models.ForeignKey('auth.User',models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    photo = models.ImageField(upload_to='blog/static/images_article', default = None  )

    def publish(self):
        self.save()

    def __str__(self):
        return self.title    


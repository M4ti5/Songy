# Generated by Django 3.0.5 on 2020-04-16 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='photo',
            field=models.ImageField(default=None, upload_to='static/images_article'),
        ),
    ]
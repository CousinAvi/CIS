# Generated by Django 3.0.2 on 2020-05-26 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Имя', models.CharField(max_length=20)),
                ('Почта', models.EmailField(max_length=254)),
                ('Сообщение', models.TextField()),
            ],
        ),
    ]
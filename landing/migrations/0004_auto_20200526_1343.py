# Generated by Django 3.0.2 on 2020-05-26 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0003_auto_20200526_1231'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='Электронная_почта',
        ),
        migrations.AlterField(
            model_name='post',
            name='Тема',
            field=models.CharField(choices=[('MS', '- Выберите тему -'), ('DPO', 'Дополнительное образование'), ('LCT', 'Лекции'), ('CTF', 'Соревнования CTF'), ('DVLP', 'Разработка ПО'), ('CVL', 'Повышение кваллификации')], default='MS', max_length=4),
        ),
    ]

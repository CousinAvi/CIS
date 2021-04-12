from django.conf import settings
from django.db import models
from django.utils import timezone
from django import forms

class Post(models.Model):
    main = 'MS'
    dop_obr = 'DPO'
    lections = 'LCT'
    CTF_comp = 'CTF'
    DVLP = 'DVLP'
    CVL = 'CVL'
    letter_subject = (
        (main, '- Выберите тему -'),
        (dop_obr, 'Дополнительное образование'),
        (lections, 'Лекции'),
        (CTF_comp, 'Соревнования CTF'),
        (DVLP, 'Разработка ПО'),
        (CVL, 'Повышение кваллификации'),
    )
    Имя = models.CharField(max_length=20)
    Электронная_почта = models.EmailField()
    #emai = models.EmailField()
    Тема = models.CharField(max_length=4,
                                      choices=letter_subject,
                                      default=main)
    Сообщение = models.TextField()

from django import forms
from django.forms import TextInput
from django.forms import Textarea, EmailField, EmailInput
from .models import *

class  PostForm(forms.ModelForm):
    class Meta:
        model = Post
        exclude = [""]
        widgets = {
            'Имя': forms.TextInput(),
            #'Имя': forms.TextInput(attrs={'placeholder': 'Имя'}),
        }

    def __init__(self, *args, **kwargs):
        super(PostForm, self).__init__(*args, **kwargs)
        self.fields['Сообщение'].widget = Textarea(attrs={
            'placeholder': 'Ваше сообщение'})

# Generated by Django 3.2.3 on 2021-05-21 12:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0007_auto_20210521_1533'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quizquestion',
            old_name='answer',
            new_name='expected_answer',
        ),
    ]

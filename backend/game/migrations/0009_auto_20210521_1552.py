# Generated by Django 3.2.3 on 2021-05-21 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0008_rename_answer_quizquestion_expected_answer'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name': 'Quiz', 'verbose_name_plural': 'Quizes'},
        ),
        migrations.AlterField(
            model_name='quizquestion',
            name='expected_answer',
            field=models.BooleanField(verbose_name='True'),
        ),
    ]

# Generated by Django 3.2.3 on 2021-05-21 10:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_auto_20210521_1324'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon_name', models.CharField(max_length=20)),
                ('wheel_fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.item')),
            ],
        ),
        migrations.CreateModel(
            name='MapQuestion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=300)),
                ('answer_message', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='MapQuestionAnswer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=200)),
                ('map_question_fk', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='game.mapquestion')),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=300)),
                ('expected_answer', models.BooleanField()),
                ('wheel_fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.item')),
            ],
        ),
        migrations.RemoveField(
            model_name='morpheneword',
            name='morphene',
        ),
        migrations.RemoveField(
            model_name='morpheneword',
            name='word',
        ),
        migrations.RemoveField(
            model_name='sentence',
            name='words',
        ),
        migrations.RemoveField(
            model_name='sentenceword',
            name='sentence',
        ),
        migrations.RemoveField(
            model_name='sentenceword',
            name='word',
        ),
        migrations.RemoveField(
            model_name='word',
            name='morphenes',
        ),
        migrations.DeleteModel(
            name='Mophene',
        ),
        migrations.DeleteModel(
            name='MorpheneWord',
        ),
        migrations.DeleteModel(
            name='Sentence',
        ),
        migrations.DeleteModel(
            name='SentenceWord',
        ),
        migrations.DeleteModel(
            name='Word',
        ),
        migrations.AddField(
            model_name='mapquestion',
            name='correct_answer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.mapquestionanswer'),
        ),
        migrations.AddField(
            model_name='mapquestion',
            name='map_fk',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.map'),
        ),
    ]

# First steps
- RU: Первые шаги

1. Clone  ->  `git clone 'url'`
2. - cd to the project folder  ->  `cd 'project-folder'`
   - `code .`
   - `cd firstapp`
   - `npm run dev`
   
1. Клонировать  ->  `git clone 'url'`
2. - перейти в папку проекта  ->  `cd 'project-folder'`
   - `code .`
   - `cd firstapp`
   - `npm run dev`


# How to use Git and add new feature to the project
- RU: Как использовать Git и добавить новую функцию в проект

### Create a new branch for adding new feature
- RU: Создать новую ветку для добавления новой функции

```bash
git checkout -b 'frature-branch-name'
```


### Add anything and commit the changes
- For creating a new commit you need to    
- RU: Для создания нового коммита вам нужно


```bash
git add .
git commit -m 'commit message'
git push
```
- After writing `push` you get the help message that you need to run the command that is shown in the terminal.
- RU: После написания `push` вы получите сообщение с подсказкой, что вам нужно выполнить команду, которая показана в терминале.

- After these steps, your commits will be pushed to the remote repository.
- RU: После этих шагов ваши коммиты будут отправлены в удаленный репозиторий.

### Create a pull request
- RU: Создать запрос на вытягивание

- Enter to the github account and you will see a button that says `Compare & pull request`. Click on it and you will see the form where you can write the title and description of the pull request.
- RU: Войдите в учетную запись github и вы увидите кнопку, на которой написано `Compare & pull request`. Нажмите на нее и вы увидите форму, где вы можете написать заголовок и описание запроса на вытягивание.


## NOTE:
- Do not use the same branch after it has been merged. Create a new branch for the new feature.
- RU: Не используйте одну и ту же ветку после того, как она была объединена. Создайте новую ветку для новой функции.

```bash
git checkout main
```
чтобы переключиться на ветку main
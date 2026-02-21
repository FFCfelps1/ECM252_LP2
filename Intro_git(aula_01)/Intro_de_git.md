```bash
felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git -v
git version 2.52.0.windows.1

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git config --global user.name "Felipe Fazio"

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git config --global user.email felipefazio.costa@gmail.com

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git init
Initialized empty Git repository in C:/Users/felip/Desktop/GitHub/ECM252_LP2/.git/

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git branch -m main

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global init.defaultBranch main

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global core.editor "code --wait"

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --list

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global --edit

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --list --show-origin

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git add .

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   Intro_git(aula_01)/Intro_de_git.md
        new file:   Intro_git(aula_01)/calculadora.py


felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git status -s
A  Intro_git(aula_01)/Intro_de_git.md
A  Intro_git(aula_01)/calculadora.py

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git commit
[main (root-commit) e10ef4a] feat(ap01-git): implementa a soma
 2 files changed, 37 insertions(+)
 create mode 100644 Intro_git(aula_01)/Intro_de_git.md
 create mode 100644 Intro_git(aula_01)/calculadora.py

 felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git log --oneline
e10ef4a (HEAD -> main) feat(ap01-git): implementa a soma


```
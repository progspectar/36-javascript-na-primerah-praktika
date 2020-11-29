git add .
rem git commit -m "first commit"
alias last='git log --graph --all --oneline --decorate '
git config --global alias.g 'log --all --decorate --oneline --graph'

git remote add origin https://github.com/pa9elz/rest-spring.git
git branch -M master
git push -u origin master

git remote rm origin

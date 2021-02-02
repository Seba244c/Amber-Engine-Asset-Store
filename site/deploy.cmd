@echo off
set /p message="Commit Name: "

git add *
git commit -m %message%
git push

npm run deploy

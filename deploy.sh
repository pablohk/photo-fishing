#!bin/bash
cd client
ng build --prod --aot=false
cd ..
mv client/dist/* server/public
git status
git add .
git commit -m"Prepare to build"
git push origin master
git subtree push --prefix=server heroku master



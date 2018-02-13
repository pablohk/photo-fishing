#!bin/bash
rm -rv client/dist
rm -rv server/public
cd client
ng build --prod --aot=false
cd ..
mv client/dist/* server/public
git status
git add .
git status
git commit -m"Prepare to build"
git push origin master
git subtree push --prefix=server heroku master

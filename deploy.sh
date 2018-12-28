#!bin/bash
public_dir="server/public"
dist_dir="client/dist"

echo "Clear previous build................"
rm -rv $dist_dir/*
rm -rv $public_dir/*

echo "Make new build................"
cd client
ng build
cd ..

if [ ! -d $public_dir ]; then
   mkdir -v $public_dir
fi

echo "Move files from client/dist to server/public................"
mv -v client/dist/* server/public

echo "Update Git and commit................"
git status
git add .
git status
read -p "add comment to commit:" comment
git commit -m"$comment"

read -p "Push in git and Heroku. Press enter to continue:..........." enter

git push origin master
git subtree push --prefix=server heroku master

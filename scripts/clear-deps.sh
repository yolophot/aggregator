#!/usr/bin/env bash
cd ..

echo Удаление node_modules/
rm -rf node_modules/

apps=(awr-app awr-app-auth-server)

for app in ${apps[@]}
do

echo Удаление apps/$app/node_modules/
rm -rf apps/$app/node_modules/
done

packages=(awr-icons awr-utils)

for pak in ${packages[@]}
do

echo Удаление packages/$pak/node_modules/
rm -rf packages/$pak/node_modules/
done

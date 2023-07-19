#!/bin/sh

cd site
node --version
yarn install
yarn run build
cd ..

echo "Listing generated files"
ls -al site/dist/

#!/bin/bash

echo "running tests"
echo $TAGS
echo $env

npm install
npx cypress install
npx cypress run --config-file cypress.$env.config.js --env TAGS=$TAGS
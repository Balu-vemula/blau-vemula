#!/bin/bash

echo "running tests"
echo $TAGS
echo $env
echo $APP_URL

npm install
npx cypress install
npx cypress run --config-file cypress.$env.config.js --env TAGS=$TAGS --env APP_URL=$APP_URL 
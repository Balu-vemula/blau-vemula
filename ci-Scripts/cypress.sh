#!/bin/bash

echo "running tests"
echo $TAGS
echo $env
echo $url


npm install
npx cypress install
npx cypress run --config-file cypress.$env.config.js --env url=$url --env TAGS=$TAGS
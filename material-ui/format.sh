#!/bin/bash
npm init -y
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node  eslint-config-node
npx install-peerdeps --dev eslint-config-airbnb
sudo npm i -g eslint
eslint --init
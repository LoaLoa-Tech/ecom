#!/bin/bash
echo "restart server"
set –e
git pull origin master
nginx -s reload

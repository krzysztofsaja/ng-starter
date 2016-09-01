#!/usr/bin/env bash
SERVER=ovh
SERVER_DIR=/var/www/html/ng-starter.escript.ninja

rsync -avz --chown www-data:www-data dist/* $SERVER:$SERVER_DIR

#!/usr/bin/env bash

# Execute on the running mysql container
docker exec -it dockernode_mysql_1 bash -c 'mysqldump -uroot -p --no-data counter > /backup/schema.sql'

echo Your schema is located at ./backup/schema.sql
#!/usr/bin/env bash

# Execute on the running mysql container
docker exec -it dockernode_mysql_1 bash -c 'mysqldump -uroot -p counter > /backup/schema_with_data.sql'

echo Your schema is located at ./backup/schema_with_data.sql
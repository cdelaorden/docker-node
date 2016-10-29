#!/usr/bin/env bash
# bin/e2e-docker.sh

# Clear previous errorShots
rm -rf ./errorShots/*.*

# Start the selenium service
# docker-compose start selenium
# sleep 1
# run actual test command in a subshell to be able to rm docker container afterwards
(
    # give selenium some time to be ready        
    # passing arguments along to the test process
    npm run test:e2e -- "$@"
)
# Stop selenium
# docker-compose stop selenium

# save exit code of subshell
testresult=$?
exit $testresult
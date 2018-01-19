#!/usr/bin/bash
now switch dawn
NOW_URL=$(npm run deploy -- --token $NOW_TOKEN --team dawn)

curl -X POST \
  -H 'Content-type: application/json' \
  --data "{\"text\": \":rocket: New Carbon PR Deployment: $NOW_URL\"}" \
  $DAWN_SLACK_WEBHOOK

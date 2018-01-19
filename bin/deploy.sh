#!/usr/bin/bash
NOW_URL=$(now -e NODE_ENV=production --public --team dawn --token $NOW_TOKEN)

curl -X POST \
  -H 'Content-type: application/json' \
  --data "{\"text\": \":rocket: New Carbon PR Deployment: $NOW_URL\"}" \
  $DAWN_SLACK_WEBHOOK

#!/usr/bin/bash
NOW_URL=$(now -e NODE_ENV=production --public --no-clipboard --team=dawn --token "$NOW_TOKEN")

echo "$TRAVIS_COMMIT_MESSAGE"
curl -X POST \
  -H 'Content-type: application/json' \
  --data "{\"text\": \":rocket: New Carbon PR Deployment for <https://github.com/dawnlabs/carbon/pulls/$TRAVIS_PULL_REQUEST|PR #$TRAVIS_PULL_REQUEST>: $NOW_URL\"}" \
  "$DAWN_SLACK_WEBHOOK"

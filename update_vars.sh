#!/bin/bash

set -e

IMAGE_TAG=$1
DOCKERHUB_REPO_PREFIX=$2
VARS_FILE="scripts/helmcharts/vars.yaml"


SERVICES=("alerts" "chalice" "frontend" "assets" "http" "sink" "storage" "heuristics" "integrations" "ender" "db")

for SERVICE in "${SERVICES[@]}"; do
  yq eval -i ".${SERVICE}.image.repository = \"${DOCKERHUB_REPO_PREFIX}/${SERVICE}\"" $VARS_FILE
  yq eval -i ".${SERVICE}.image.tag = \"${IMAGE_TAG}\"" $VARS_FILE
  yq eval -i ".${SERVICE}.image.pullPolicy = \"Always\"" $VARS_FILE
done


yq eval -i ".global.imagePullSecrets[0].name = \"docker-hub-secret\"" $VARS_FILE

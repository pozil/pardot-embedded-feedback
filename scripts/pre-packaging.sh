#!/bin/bash
SCRIPT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd $SCRIPT_PATH/..

PACKAGING_ORG_ALIAS="pardot-prod"

echo "Adding namespace in DX project..." && \
sed -i '' -e 's,"namespace": "","namespace": "parsur",' sfdx-project.json && \
echo "" && \

echo "Deploying to packaging org..." && \
sfdx force:source:deploy -p force-app -u $PACKAGING_ORG_ALIAS && \
echo "" && \

echo "Restoring project config..." && \
git checkout -- sfdx-project.json
EXIT_CODE="$?"

# Check exit code
echo ""
if [ "$EXIT_CODE" -eq 0 ]; then
    echo "Deployment completed."
else
    echo "Deployment failed."
fi
exit $EXIT_CODE

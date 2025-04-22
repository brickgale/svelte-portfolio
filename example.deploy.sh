#!/bin/bash
echo "Removing old files from Google Cloud Storage..."

gsutil -m rm gs://<destination_bucket>/**

echo "Copying files to Google Cloud Storage..."

gsutil -m cp -r dist/* gs://<destination_bucket>/

echo "✅ Deployment complete!"
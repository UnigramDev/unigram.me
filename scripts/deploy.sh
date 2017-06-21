#!/usr/bin/env bash
# This script will create a production build of your React application and
# deploy it to an existing site on Netlify.

# Halt the script upon error.
set -e

# Create the optimized production build.
npm run build

# Install the Netlify CLI tool.
npm install -g netlify-cli

# Deploy the content of build folder to a specific site and use a Netlify access
# token for authentication.
#
# The two variables are not set in this script for privacy reasons. Instead,
# they are defined as environment variables on Travis. Uncoment the following 
# two rows and put your data if you wish to use this script locally:
#
# NETLIFYSITE="site_name"
# NETLIFYKEY="access_token" (create one here: https://app.netlify.com/account/applications)
netlify deploy -p ./build -s $NETLIFYSITE -t $NETLIFYKEY
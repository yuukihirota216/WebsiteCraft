#!/bin/bash
# First build the static files
npm run build

# Then start the static server
node static-server.js
#!/bin/bash

# Compile the schema
./node_modules/.bin/amplify api gql-compile

# Generate the code
./node_modules/.bin/amplify codegen

codegen:
	yq --version || brew install yq
	rm -f src/API.ts
	yq '.projects.mewapp.extensions.amplify.maxDepth'=10 -i  .graphqlconfig.yml
	./node_modules/.bin/amplify codegen

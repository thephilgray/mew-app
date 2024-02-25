codegen: 
	yq --version || brew install yq
	rm -rf src/graphql/d3
	yq '.projects.mewapp.extensions.amplify.maxDepth'=3 -i  .graphqlconfig.yml
	amplify codegen
	mkdir d3
	cp src/graphql/{mutations.ts,queries.ts,subscriptions.ts} d3
	yq '.projects.mewapp.extensions.amplify.maxDepth'=5 -i  .graphqlconfig.yml
	amplify codegen
	mv d3 src/graphql
	sed -i '' 's|"../API"|"../../API"|g' src/graphql/d3/mutations.ts
	sed -i '' 's|"../API"|"../../API"|g' src/graphql/d3/queries.ts
	sed -i '' 's|"../API"|"../../API"|g' src/graphql/d3/subscriptions.ts


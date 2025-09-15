codegen:
	set -e
	rm -rf src/graphql/d3
	rm -rf d3
	rm -f src/API.ts
	yq -i -y '.projects.mewapp.extensions.amplify.maxDepth=3' .graphqlconfig.yml
	./node_modules/.bin/amplify codegen
	mkdir d3
	cp src/graphql/mutations.ts d3/
	cp src/graphql/queries.ts d3/
	cp src/graphql/subscriptions.ts d3/
	yq -i -y '.projects.mewapp.extensions.amplify.maxDepth=5' .graphqlconfig.yml
	./node_modules/.bin/amplify codegen
	mv d3 src/graphql
	sed -i 's|"../API"|"../../API"|g' src/graphql/d3/mutations.ts
	sed -i 's|"../API"|"../../API"|g' src/graphql/d3/queries.ts
	sed -i 's|"../API"|"../../API"|g' src/graphql/d3/subscriptions.ts


# First time setup
setup:
	npm install

# Run dev server
run:
	npm run start

# Run unit test suit
test:
	npm run test

# Deploy application to github pages
deploy:
	npm install

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
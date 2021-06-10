# First time setup
setup:
	npm install

# Run dev server
run:
	npm run start

# Deploy application to github pages
deploy:
	npm install

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
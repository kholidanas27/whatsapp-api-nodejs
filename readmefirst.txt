1. Run "npm i" in your project
2. Create database in your local project, default = "whatsapp-api"
3. Before Run migration and seeder change "type" to 'commonjs' in package.json if run migrations
4. npx sequelize-cli db:migrate
4. Run npx sequelize-cli db:seed:all
5. Copy and Paste your token access to env
6. Change "type" to 'module' in package.json
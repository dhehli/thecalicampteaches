# TheCalicampTeaches Setup

1. Install Node.js https://nodejs.org/en/
2. Install Rethink DB https://www.rethinkdb.com/

## Intallation

1. Download project from github https://github.com/dhehli/thecalicampteaches
2. cd to your rethinkdb.exe and run `rethinkdb` command.
3. cd to thecalicampteaaches root
4. add default.json and test.json to config folder--> this files are not on github because of private api-keys.
5. run `npm install` to install all node_modules.
6. run `npm run setup` to create databases. This will create the main and the test database.
7. run `npm run server` this will start the backend server with nodemon to detect code changes. `http://localhost:3000/`
8. run `ng serve` to startup the angular frontend. `http://localhost:4200/`

## Running unit tests
1. run `npm run test` to test the rest api.

## Build Project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

Mail to me.

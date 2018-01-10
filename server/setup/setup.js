import r from 'rethinkdb'
import config from 'config';

const dbCaliCamp = 'thecalicampteaches';
const dbCaliCampTest = 'thecalicampteachestest';

createDatabaseIfNotExists(dbCaliCamp)
.then(()=> {
  createTableIfNotExists(dbCaliCamp,'order');
  createTableIfNotExists(dbCaliCamp,'team');
  createTableIfNotExists(dbCaliCamp,'testimonial');
  createTableIfNotExists(dbCaliCamp,'user');
  createTableIfNotExists(dbCaliCamp,'forgotpassword');
  createTableIfNotExists(dbCaliCamp,'voucher');
})
.catch(err => console.log(err));

createDatabaseIfNotExists(dbCaliCampTest)
.then(()=> {
  createTableIfNotExists(dbCaliCampTest,'order');
  createTableIfNotExists(dbCaliCampTest,'team');
  createTableIfNotExists(dbCaliCampTest,'testimonial');
  createTableIfNotExists(dbCaliCampTest,'user');
  createTableIfNotExists(dbCaliCampTest,'forgotpassword');
  createTableIfNotExists(dbCaliCampTest,'voucher')
})
.catch(err => console.log(err));

function connection(){
  return new Promise((resolve, reject) => {
    r.connect({
        host: config.get('rethinkdb.host'),
        port: config.get('rethinkdb.port')
      }, (err, conn) => {
        if (err) reject(err);
        resolve(conn);
    })
  })
}

function createDatabaseIfNotExists(dbName){
  return connection()
  .then(connection => {
    r.dbList()
    .run(connection)
    .then(result => {
      if(!result.includes(dbName)){
        r.dbCreate(dbName).run(connection);
        console.log(`[-] database ${dbName} created`)
      }else{
        console.log(`[!] database ${dbName} already exists`)
      }
    })
  })
}

function createTableIfNotExists(dbName, tableName){
  return connection()
  .then(connection => {
    r.db(dbName)
    .tableList()
    .run(connection)
    .then(result => {
      if(!result.includes(tableName)){
        r.db(dbName).tableCreate(tableName).run(connection);
        console.log(`[-] table ${tableName} created`)
      }else{
        console.log(`[!] table ${tableName} already exists`)
      }
    })
  })
}

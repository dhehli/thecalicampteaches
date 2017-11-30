import r from 'rethinkdb'
import config from 'config';

const dbCaliCamp = 'thecalicampteaches';

createDatabaseIfNotExists(dbCaliCamp);

createTableIfNotExists(dbCaliCamp,'order');
createTableIfNotExists(dbCaliCamp,'team');
createTableIfNotExists(dbCaliCamp,'testimonial');
createTableIfNotExists(dbCaliCamp,'user');
createTableIfNotExists(dbCaliCamp,'uservideo');

function connection(){
    return new Promise((resolve, reject) => {
        r.connect( {
          host: config.get('rethinkdb.host'),
          port: config.get('rethinkdb.port')
        }, (err, conn) => {
          if (err) reject(err);
          resolve(conn);
      })
  })
}

function createDatabaseIfNotExists(dbName){
  connection()
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
  .catch(e => console.log(e));
}

function createTableIfNotExists(dbName, tableName){
  connection()
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
  .catch(e => console.log(e));
}

import r from 'rethinkdb'
import config from 'config';
import bcrypt from 'bcryptjs';
const dbCaliCamp = 'thecalicampteaches';

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

bcrypt.compare("123", "$2a$10$ScxZ3NXwrQ8MxsUf7kV.meA8rxisaSpgmnkmY5sJPkq9BgnNUO/k2").then(res => console.log(res));


function createAdminIfNotExists(dbName){
  return connection()
  .then(connection => {
    r.db(dbName)
    .table("user")
    .filter({admin: true})
    .run(connection)
    .then(cursor => {
      cursor.toArray((err, results) => {
        if(results.length === 0){
          r.db(dbName)
          .table("user")
          .insert({
            "admin": true ,
            "created": new Date(),
            "email": "admin@admin.ch",
            "firstname": "admin" ,
            "lastname": "admin" ,
            "onlineSate": true ,
            "password": "$2a$10$ScxZ3NXwrQ8MxsUf7kV.meA8rxisaSpgmnkmY5sJPkq9BgnNUO/k2" ,
            "salutation": "Mr."
          })
          .run(connection)
          .then(cursor => {
            console.log("admin created use login: admin@admin.ch, password: 123");
          })
        }else{
          console.log("there is already an admin user in the database");
        }
      })
    })
  })
}

createAdminIfNotExists(dbCaliCamp);

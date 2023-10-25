
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'name',          '_id_address',          'phone',          'email',          'signup_timestamp',          '_id_client_referer'],properties: {name: {bsonType: 'string'},_id_address: {bsonType: 'objectId'},phone: {bsonType: 'string'},email: {bsonType: 'string'},signup_timestamp: {bsonType: 'timestamp'},_id_client_referer: {bsonType: 'objectId'}}         }      }});  
 db.client.createIndex(
{
  "_id": 1
})


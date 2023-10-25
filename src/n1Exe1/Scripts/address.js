
db.createCollection( 'address', {validator: {$jsonSchema: {bsonType: 'object',title:'address',required: [         'street',          'number',          'floor',          'door',          'city',          'postal_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'double'},floor: {bsonType: 'double'},door: {bsonType: 'double'},city: {bsonType: 'string'},postal_code: {bsonType: 'string'},country: {bsonType: 'string'}}         }      }});  
 db.address.createIndex(
{
  "_id": 1
})


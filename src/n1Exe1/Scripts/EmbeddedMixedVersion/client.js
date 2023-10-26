
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'name',          'address',          'phone',          'email',          'signup_timestamp'],properties: {name: {bsonType: 'string'},address: {bsonType: 'object',
title:'object',required: [         'street',          'number',          'floor',          'door',          'city',          'postal_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'double'},floor: {bsonType: 'double'},door: {bsonType: 'double'},city: {bsonType: 'string'},postal_code: {bsonType: 'string'},country: {bsonType: 'string'}}},phone: {bsonType: 'string'},email: {bsonType: 'string'},signup_timestamp: {bsonType: 'timestamp'}}         }      }});  
 db.client.createIndex(
{
  "_id": 1
})


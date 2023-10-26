
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'name',          'address',          'phone',          'email'],properties: {name: {bsonType: 'string'},address: {bsonType: 'object',
title:'object',required: [         'street',          'number',          'floor',          'door',          'postal_code',          'local'],properties: {street: {bsonType: 'string'},number: {bsonType: 'double'},floor: {bsonType: 'double'},door: {bsonType: 'double'},postal_code: {bsonType: 'string'},local: {bsonType: 'object',
title:'object',required: [         'province',          'locality',          'city',          'country'],properties: {province: {bsonType: 'string'},locality: {bsonType: 'string'},city: {bsonType: 'string'},country: {bsonType: 'string'}}}}},phone: {bsonType: 'string'},email: {bsonType: 'string'}}         }      }});  
 db.client.createIndex(
{
  "_id": 1
})


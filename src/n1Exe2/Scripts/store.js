
db.createCollection( 'store', {validator: {$jsonSchema: {bsonType: 'object',title:'store',required: [         'address'],properties: {address: {bsonType: 'object',
title:'object',required: [         'street',          'number',          'floor',          'door',          'postal_code',          'local'],properties: {street: {bsonType: 'string'},number: {bsonType: 'double'},floor: {bsonType: 'double'},door: {bsonType: 'double'},postal_code: {bsonType: 'string'},local: {bsonType: 'object',
title:'object',required: [         'province',          'locality',          'city',          'country'],properties: {province: {bsonType: 'string'},locality: {bsonType: 'string'},city: {bsonType: 'string'},country: {bsonType: 'string'}}}}}}         }      }});  
 db.store.createIndex(
{
  "_id": 1
})


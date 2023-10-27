
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',required: [         'name',          'password',          'signup_timestamp',          'birth_date',          'genre',          'country',          'postal_code',          'phone',          'email',          'channel',          'subscription'],properties: {name: {bsonType: 'string'},password: {bsonType: 'string'},signup_timestamp: {bsonType: 'timestamp'},birth_date: {bsonType: 'date'},genre: {bsonType: 'string'},country: {bsonType: 'string'},postal_code: {bsonType: 'string'},phone: {bsonType: 'string'},email: {bsonType: 'string'},channel: {bsonType: 'object',
title:'object',required: [         'name',          'description',          'creation_timestamp'],properties: {name: {bsonType: 'string'},description: {bsonType: 'string'},creation_timestamp: {bsonType: 'timestamp'}}},subscription: {bsonType: 'array',items: {
title:'object',required: [         'channel_name'],properties: {channel_name: {bsonType: 'string'}}}}}         }      }});  
 db.user.createIndex(
{
  "_id": 1
})


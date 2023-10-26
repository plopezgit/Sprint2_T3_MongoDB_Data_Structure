
db.createCollection( 'vendor', {validator: {$jsonSchema: {bsonType: 'object',title:'vendor',required: [         'name',          'surname',          'nif',          'phone',          'type',          'store'],properties: {name: {bsonType: 'string'},surname: {bsonType: 'string'},nif: {bsonType: 'string'},phone: {bsonType: 'string'},type: {bsonType: 'string'},store: {bsonType: 'object',
title:'object',required: [         '_id_store'],properties: {_id_store: {bsonType: 'objectId'}}}}         }      }});  
 db.vendor.createIndex(
{
  "_id": 1
})


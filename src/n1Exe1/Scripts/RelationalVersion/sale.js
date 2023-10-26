
db.createCollection( 'sale', {validator: {$jsonSchema: {bsonType: 'object',title:'sale',required: [         '_id_productList',          '_id_vendor',          '_id_client',          'invoice_number',          'timestamp'],properties: {_id_productList: {bsonType: 'array',items: {
title:'object',required: [         '_id_product'],properties: {_id_product: {bsonType: 'objectId'}}}},_id_vendor: {bsonType: 'double'},_id_client: {bsonType: 'objectId'},invoice_number: {bsonType: 'double'},timestamp: {bsonType: 'timestamp'}}         }      }});  
 db.sale.createIndex(
{
  "_id": 1
})



db.createCollection( 'purchase_order', {validator: {$jsonSchema: {bsonType: 'object',title:'purchase_order',required: [         'order_type',          '_id_productList',          '_id_client',          'invoice_number',          'timestamp',          'vendor',          'delivery'],properties: {order_type: {bsonType: 'string'},_id_productList: {bsonType: 'array',items: {
title:'object',required: [         '_id_product'],properties: {_id_product: {bsonType: 'objectId'}}}},_id_client: {bsonType: 'objectId'},invoice_number: {bsonType: 'double'},timestamp: {bsonType: 'timestamp'},vendor: {bsonType: 'objectId'},delivery: {bsonType: 'object',
title:'object',required: [         '_id_vendor_delivery',          'time'],properties: {_id_vendor_delivery: {bsonType: 'objectId'},time: {bsonType: 'date'}}}}         }      }});  
 db.purchase_order.createIndex(
{
  "_id": 1
})


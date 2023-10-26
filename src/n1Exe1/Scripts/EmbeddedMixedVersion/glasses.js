
db.createCollection( 'glasses', {validator: {$jsonSchema: {bsonType: 'object',title:'glasses',required: [         'product_graduation_l',          'product_graduation_r',          'product_material',          'product_price',          'brand',          'provider'],properties: {product_graduation_l: {bsonType: 'decimal'},product_graduation_r: {bsonType: 'decimal'},product_material: {bsonType: 'string'},product_price: {bsonType: 'decimal'},brand: {bsonType: 'string'},provider: {bsonType: 'object',
title:'object',required: [         'name',          'phone',          'fax',          'nif',          'address'],properties: {name: {bsonType: 'string'},phone: {bsonType: 'string'},fax: {bsonType: 'string'},nif: {bsonType: 'string'},address: {bsonType: 'object',
title:'object',required: [         'street',          'number',          'floor',          'door',          'city',          'postal_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'double'},floor: {bsonType: 'double'},door: {bsonType: 'double'},city: {bsonType: 'string'},postal_code: {bsonType: 'string'},country: {bsonType: 'string'}}}}}}         }      }});  
 db.glasses.createIndex(
{
  "_id": 1
})


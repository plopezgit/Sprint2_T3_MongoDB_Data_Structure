
db.createCollection( 'product', {validator: {$jsonSchema: {bsonType: 'object',title:'product',required: [         'name',          'price',          'description',          'category'],properties: {name: {bsonType: 'string'},price: {bsonType: 'decimal'},description: {bsonType: 'string'},category: {bsonType: 'string'}}         }      }});  
 db.product.createIndex(
{
  "_id": 1
})



db.createCollection( 'glasses', {validator: {$jsonSchema: {bsonType: 'object',title:'glasses',required: [         '_id_brand',          'product_graduation_l',          'product_graduation_r',          'product_material',          'product_price'],properties: {_id_brand: {bsonType: 'objectId'},product_graduation_l: {bsonType: 'decimal'},product_graduation_r: {bsonType: 'decimal'},product_material: {bsonType: 'string'},product_price: {bsonType: 'decimal'}}         }      }});  
 db.glasses.createIndex(
{
  "_id": 1
})


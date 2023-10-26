
db.createCollection( 'brand', {validator: {$jsonSchema: {bsonType: 'object',title:'brand',required: [         'brand_name',          '_id_provider'],properties: {brand_name: {bsonType: 'string'},_id_provider: {bsonType: 'objectId'}}         }      }});  
 db.brand.createIndex(
{
  "_id": 1
})


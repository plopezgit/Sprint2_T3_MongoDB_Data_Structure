
db.createCollection( 'provider', {validator: {$jsonSchema: {bsonType: 'object',title:'provider',required: [         'name',          'address',          'phone',          'fax',          'nif'],properties: {name: {bsonType: 'string'},address: {bsonType: 'objectId'},phone: {bsonType: 'string'},fax: {bsonType: 'string'},nif: {bsonType: 'string'}}         }      }});  
 db.provider.createIndex(
{
  "_id": 1
})


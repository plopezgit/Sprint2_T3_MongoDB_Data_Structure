
db.createCollection( 'playlist', {validator: {$jsonSchema: {bsonType: 'object',title:'playlist',required: [         'name',          'description',          'creation_timestamp',          'state',          'user'],properties: {name: {bsonType: 'string'},description: {bsonType: 'string'},creation_timestamp: {bsonType: 'timestamp'},state: {bsonType: 'string'},user: {bsonType: 'objectId'}}         }      }});  
 db.playlist.createIndex(
{
  "_id": 1
})


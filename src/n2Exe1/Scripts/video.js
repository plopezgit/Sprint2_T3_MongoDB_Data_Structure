
db.createCollection( 'video', {validator: {$jsonSchema: {bsonType: 'object',title:'video',required: [         'title',          'id_user',          'id_playlist',          'description',          'upload_timestamp',          'size',          'duration',          'thumbnail',          'plays',          'likes',          'dislikes',          'semantic_tags',          'status',          'file_name',          'comments'],properties: {title: {bsonType: 'string'},id_user: {bsonType: 'objectId'},id_playlist: {bsonType: 'objectId'},description: {bsonType: 'string'},upload_timestamp: {bsonType: 'timestamp'},size: {bsonType: 'double'},duration: {bsonType: 'double'},thumbnail: {bsonType: 'string'},plays: {bsonType: 'double'},likes: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'like_timestamp'],properties: {id_user: {bsonType: 'objectId'},like_timestamp: {bsonType: 'timestamp'}}}},dislikes: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'dislike_timestamp'],properties: {id_user: {bsonType: 'objectId'},dislike_timestamp: {bsonType: 'timestamp'}}}},semantic_tags: {bsonType: 'array',items: {
title:'object',required: [         'tag'],properties: {tag: {bsonType: 'string'}}}},status: {bsonType: 'double'},file_name: {bsonType: 'string'},comments: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'text_post',          'comment_timestamp',          'likes',          'dislikes'],properties: {id_user: {bsonType: 'objectId'},text_post: {bsonType: 'string'},comment_timestamp: {bsonType: 'timestamp'},likes: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'like_timestamp'],properties: {id_user: {bsonType: 'objectId'},like_timestamp: {bsonType: 'timestamp'}}}},dislikes: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'dislike_timestamp'],properties: {id_user: {bsonType: 'objectId'},dislike_timestamp: {bsonType: 'timestamp'}}}}}}}}         }      }});  
 db.video.createIndex(
{
  "_id": 1
})


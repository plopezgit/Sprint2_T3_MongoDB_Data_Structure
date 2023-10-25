
db.createCollection( 'client', {
	validator: {
		jsonSchema: {
			bsonType: object,
		},
	},
})

db.client.insertMany([{
	name: "Ryal",
	address: {
		street: "LLulis",
		number: 1,
		floor: 2,
		door: 3,
		city: "Clop",
		postal_code: "076434",
		country: "Cris",
	},
	phone: "64732462",
	email: "ryal@tt.com",
	signup_timestamp: new Timestamp(),
},
{
	name: "Coral",
	address: {
		street: "Colis",
		number: 4,
		floor: 6,
		door: 3,
		city: "Zulu",
		postal_code: "098734",
		country: "Cris",
	},
	phone: "64732462",
	email: "coral@tt.com",
	signup_timestamp: new Timestamp(),
}	
])


db.client.updateOne({
name: "Ryal"}, 
{$set: {_id_client_referer: ObjectId("6539175e39f21524d94710c8")}})

db.client.updateOne({
name: "Coral"}, 
{$set: {_id_client_referer: ObjectId("6539175e39f21524d94710c7")}})

db.sale.insertOne({
	_id_productList: [{
		_id_product: ObjectId("653a6bf5d80af1f5e41d0847"),
	}],
	_id_vendor: 34,
	_id_client: ObjectId("653a2a01d80af1f5e41d0842"),
	invoice_number: 1,
	timestamp: new Timestamp(),
})

db.glasses.insertOne({
	product_graduation_l: Decimal128("1.5"),
	product_graduation_r: Decimal128("1.0"),
	product_material: "Plastic",
	product_price: Decimal128("453.00"),
	brand: "G1",
	provider: {
		name: "Giorgio",
		phone: "657474632",
		fax: "657453621",
		nif: "T764372654L",
		address: {
			street: "Carlino",
			number: 4,
			floor: 4,
			door: 2,
			city: "Cori",
			postal_code: "078534",
			country: "Cris",
		},
	},
})

db.provider.insertOne({
	name: "Giorgio Arm",
	address: {
		street: "Carlino",
		number: 4,
		floor: 4,
		door: 2,
		city: "Cori",
		postal_code: "078534",
		country: "Cris",
	},
	phone: "657474632",
	fax: "657453621",
	nif: "T764372654L"	
})
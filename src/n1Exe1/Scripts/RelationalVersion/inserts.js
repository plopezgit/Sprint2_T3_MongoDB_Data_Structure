
db.address.insertOne({
	street: "LLulis",
	number: 1,
	floor: 2,
	door: 3,
	city: "Clop",
	postal_code: "076434",
	country: "Cris"
})

db.client.insertMany([{
	name: "Ryal",
	_id_address: ObjectId("65390bce39f21524d94710bd"),
	phone: "64732462",
	email: "ryal@tt.com",
	signup_timestamp: new Timestamp(),
},
{
	name: "Coral",
	_id_address: ObjectId("65390bce39f21524d94710bd"),
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
		_id_product: ObjectId("65391ba239f21524d94710cb"),
	}],
	_id_vendor: 34,
	_id_client: ObjectId("6539175e39f21524d94710c7"),
	invoice_number: 1,
	timestamp: new Timestamp(),
})

db.glasses.insertOne({
	_id_brand: ObjectId("6539128839f21524d94710c2"),
	product_graduation_l: Decimal128("1.5"),
	product_graduation_r: Decimal128("1.0"),
	product_material: "Plastic",
	product_price: Decimal128("453.00"),
})

db.brand.insertOne({
	brand_name: "Giorgio Arm",
	_id_provider: ObjectId("6539117e39f21524d94710c0"),
	
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
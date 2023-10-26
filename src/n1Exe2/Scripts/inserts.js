
db.client.insertMany([{
	name: "Ryal",
	address: {
		street: "LLulis",
		number: 1,
		floor: 2,
		door: 3,
		postal_code: "076434",
		local: {
			province: "Ponte",
			locality: "Bruna",
			city: "Clop",
			country: "Cris",
		},
		
	},
	phone: "64732462",
	email: "ryal@tt.com",
},
{
	name: "Coral",
	address: {
		street: "Colis",
		number: 4,
		floor: 6,
		door: 3,
		postal_code: "07232",
		local: {
			province: "Ponte",
			locality: "Colo",
			city: "Clop",
			country: "Cris",
		},
		
	},
	phone: "64732462",
	email: "ryal@tt.com",
}	
])

db.store.insertOne({
	address: {
	street: "Calio",
	number: 1,
	floor: 2,
	door: 3,
	postal_code: "073234",
	local: {
		province: "Ponte",
		locality: "Bruna",
		city: "Clop",
		country: "Cris",
	},	
	},
})

db.purchase_order.insertOne({
	order_type: "Delivery",
	_id_productList: [{
		_id_product: ObjectId("653b678bd80af1f5e41d084c"),
	}],
	_id_client: ObjectId("653b63e5d80af1f5e41d0849"),
	invoice_number: 1,
	timestamp: new Timestamp(),
	vendor: ObjectId("653b6dadd80af1f5e41d084e"),
	delivery: {
		_id_vendor_delivery: ObjectId("653b6dadd80af1f5e41d084d"),
		time: new Date("20243-10-03T20:30:00"),
	}
})

db.product.insertOne({
	name: "Margarita",
	price: Decimal128("5.00"),
	description: "Tuti, tuti",
	description: "/im.png",
	category: "Pizza y Pastry"
})

db.vendor.insertMany([{
	name: "Jul",
	surname: "Kil",
	nif: "73627834",
	phone: "657474632",
	type: "Delivery",
	store: {
		_id_store: ObjectId("653b65cad80af1f5e41d084b"),
	}
},
{
	name: "KUL",
	surname: "Phil",
	nif: "45649993",
	phone: "467457864",
	type: "Cook",
	store: {
		_id_store: ObjectId("653b65cad80af1f5e41d084b"),
	}

}
])
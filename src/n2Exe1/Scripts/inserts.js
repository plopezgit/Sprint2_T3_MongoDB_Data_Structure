db.user.insertOne({
	name: "Ryal",
	password: "653532",
	signup_timestamp: new Timestamp(),
	birth_date: new Date("20243-10-03"),
	genre: "Femenine",
	country: "Cris",
	postal_code: "076434",
	phone: "64732462",
	email: "ryal@tt.com",
	channel: {
		name: "Seon",
		description: "Seon bull",
		creation_timestamp: new Timestamp(),
	},
	subscription: [{
		channel_name: "Col",
	}]
})

db.playlist.insertOne({
	name: "Bob M",
	description: "Reggae top",
	creation_timestamp: new Timestamp(),
	state: "public",
	user: ObjectId("653bb5a4d80af1f5e41d0850"),
})

db.video.insertOne({
	title: "Shot the sher",
	id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
	id_playlist: ObjectId("653bb6b4d80af1f5e41d0851"),
	description: "Legend",
	upload_timestamp: new Timestamp(),
	size: 6545,
	duration: 87434,
	thumbnail: "/im.png",
	plays: 99999999999999,
	likes: [{
		id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
		like_timestamp: new Timestamp(),
	}],
	dislikes: [{
		id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
		dislike_timestamp: new Timestamp(),
	}],
	semantic_tags: [{
		tag: "Reggae",
	}],
	status: 1,
	file_name: "shot",
	comments: [{
		id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
		text_post: "Lorem, lorem",
		comment_timestamp: new Timestamp(),
		likes: [{
			id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
			like_timestamp: new Timestamp(),
		}],
		dislikes: [{
			id_user: ObjectId("653bb5a4d80af1f5e41d0850"),
			dislike_timestamp: new Timestamp(),
		}],
	}],
	
})
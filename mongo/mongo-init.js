db.createUser (
	{
		user: "handler",
		pwd: "password",
		roles: [ { role: "readWrite", db: "worker" }]
	}
);

db.createUser (
	{
		user: "push",
		pwd: "password",
		roles: [ { role: "readWrite", db: "worker" }]
	}
);

db.createUser (
	{
		user: "watch",
		pwd: "password",
		roles: [ { role: "readWrite", db: "worker" }]
	}
);

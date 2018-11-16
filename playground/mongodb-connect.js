//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'ron', age: 28};

// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err){
		console.log('Unable to connect to MonogDB server');
	}

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Inserted documents',
	// 	completed: false
	// },(err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });
	//  db.collection('Users').insertOne({
	// 	name: 'Ron Louie Marte',
	// 	age: 28,
	// 	location: 'Iloilo'
	// },(err, result) => {
	// 	if (err){
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	//console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp());

	// });

	client.close();; 
});

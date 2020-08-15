import express from 'express';

const app = express();
const PORT = 3333;

app.use(express.json());

app.post('/users', (request, response) => {
	const users = [
		{ name: 'Bruno', age: 29 },
		{ name: 'Alex', age: 25 }
	];
	response.json(users);
});

app.listen(PORT);

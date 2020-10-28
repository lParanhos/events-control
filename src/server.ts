import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { getAllEvents, createAnEvent } from './controllers/eventsController';
import { db } from './db/sqliteDb';
import { json } from 'body-parser'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

db()

const app = polka().use(json())

app.get('/api/events', getAllEvents)
app.post('/api/events', createAnEvent)


app 
.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	})

import express, {Application}  from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Para el front
import path from 'path'

import indexRoutes from './routes/indexRoutes';
import tasksRoutes from './routes/tasksRoutes';


class Server {

	public app: Application;

	public front: Application;

	constructor() {

		this.app = express();
		this.front = express();
		this.config();
		this.routes();

	}

	config(): void {
		this.front.set('port', process.env.PORT || 4000);
		this.front.use(express.static(path.join(__dirname, 'client')))

		this.app.set('port', 3000);
		this.app.use(morgan('dev'))
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(express.urlencoded({extended: false}))
	}

	routes(): void {
		this.app.use('/', indexRoutes);
		this.app.use('/api/v1/tasks', tasksRoutes);

		this.front.get('/', function(req, res) {
		    res.sendFile(path.join(__dirname + '/client/index.html'));
		});
	}

	start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log('SERVER ON PORT', this.app.get('port'))
		});

		this.front.listen(this.front.get('port'), () => {
			console.log('FRONT ON PORT', this.front.get('port'))
		})
	}

}

const server = new Server();
server.start();
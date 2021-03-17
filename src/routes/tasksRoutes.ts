import { Router } from 'express';

import tasksControllers from '../controllers/tasksControllers';


class TasksRoutes {

	public router: Router = Router();

	constructor() {
		this.config();
	}

	config(): void {
		this.router.get('/', tasksControllers.list)
		this.router.get('/:id', tasksControllers.getone)
		this.router.post('/', tasksControllers.create)
		this.router.put('/:id', tasksControllers.update)
		this.router.delete('/:id', tasksControllers.delete)
	}

}

const taskssRoutes = new TasksRoutes();
export default taskssRoutes.router;
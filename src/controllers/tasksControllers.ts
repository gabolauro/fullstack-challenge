import { Request, Response } from 'express';

import pool from '../database';

class TasksController {


	//Metodo GET
	public async list (req: Request, res: Response): Promise<void> {
		const alertas = await pool.query('SELECT * FROM tasklist LIMIT 0,10')
		res.json(alertas)
	}

	//Metodo GET
	public async getone (req: Request, res: Response): Promise<any> {
		const id = req.params.id
		const alerta = await pool.query('SELECT * FROM tasklist WHERE id = ?', [id])
		if (alerta.length > 0) {
			res.json(alerta[0])
		} else {
			res.status(400).json({text: 'Registro no encontrado'})
		}
		// res.json(id)
		console.log(id)
		console.log(alerta)
	}

	//Metodo  POST
	public async create (req: Request, res: Response): Promise<void> {
		const result = await pool.query('INSERT INTO tasklist SET ?', [req.body])
		res.json({text: 'Tarea cargada'})
	}

	//Metodo  PUT
	public async update (req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const oldTask = req.body;
		await pool.query('UPDATE tasklist SET ? WHERE id = ?', [req.body, id])
		res.json({text: 'Tarea actualizada ' + req.params.id})
	}

	//Metodo  DELETE
	public async delete (req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		await pool.query('DELETE FROM tasklist WHERE id = ?', [id]);
		res.json({text: 'Tarea borrada ' + req.params.id})
	}




}

const tasksControler = new TasksController();
export default tasksControler;
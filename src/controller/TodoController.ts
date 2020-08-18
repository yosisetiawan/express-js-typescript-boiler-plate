import { Request, Response } from 'express'
import IController from './ControllerInterface'

class TodoController implements IController{

    index = ( req:Request,  res: Response): Response => {
        return res.send({
            type: 'GET',
            messages: 'GET ALL TODOS',
        })
    }

    create = (req:Request, res:Response): Response => {
        const { text } = req.body
        return res.send({
            type: 'POST',
            messages: 'SAVE TODOS',
            body: text
        })
    }

    show = (req:Request, res:Response): Response => {
        return res.send({
            type: 'GET',
            messages: 'GET ONE TODOS DATA'
        })
    }

    update = (req:Request, res:Response): Response => {
        return res.send({
            type: 'PUT',
            messages: 'UPDATE TODOS'
        })
    }

    delete = (req:Request, res:Response): Response => {
        return res.send({
            type: 'DELETE',
            messages: 'DELETE TODOS'
        })
    }
}

export default new TodoController()
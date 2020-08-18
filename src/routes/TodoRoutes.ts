import RouteBase from './RouteBase'
import TodoController from './../controller/TodoController'

class TodoRoutes extends RouteBase{

    public routes():void{
        this.router.get('/', TodoController.index)
        this.router.post('/', TodoController.create)
        this.router.get('/:id', TodoController.show)
        this.router.put('/:id', TodoController.update)
        this.router.delete('/:id', TodoController.delete)
    }
}

export default new TodoRoutes().router
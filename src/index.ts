import express, { Application } from 'express'
import bodyParser from 'body-parser'
import {config as dotenv} from 'dotenv'

import todoRoutes from './routes/TodoRoutes'

class App{

    public app: Application

    constructor(){
        this.app = express()
        this.plugins()
        this.routes()
        dotenv()
    }

    protected plugins(): void{
        this.app.use(bodyParser.json())
    }

    protected routes(): void{
        this.app.use('/api/v1/todo', todoRoutes)
    }
}


const port:Number = 8080
const app = new App().app

app.listen(port, () => {
    console.log(`Server Development Running in localhost:${port}`)
})
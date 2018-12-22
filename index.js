//const http=require('http')
import express from "express"
const app=express()
import bodyParser from 'body-parser'
//import articleRouter from './routes/articleRoutes'
import adminRouter from './routes/adminRoutes'
import userRouter from './routes/userRoutes'
import path from 'path'

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'./views'))


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//app.use('/articles',articleRouter)
app.use('/users',userRouter)
app.use('/admins',adminRouter)



app.listen(3100)
//export {default as app}
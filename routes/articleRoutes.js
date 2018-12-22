import express from 'express'
import { getArticle,addArticle,editArticle,deleteArticle } from '../controllers/articleController'

const articleRouter = express.Router()

articleRouter.get('/articles',getArticle)
articleRouter.post('/articles',addArticle)
articleRouter.delete('/articles',deleteArticle)
articleRouter.put('/articles',editArticle)

export default articleRouter
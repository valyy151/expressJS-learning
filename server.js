const express = require('express')
const app = express()
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')





app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3000)
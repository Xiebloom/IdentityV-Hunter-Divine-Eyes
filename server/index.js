const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')


// 创建网站服务器
const app = express();

// 设置相应属性等
app.use(cors())
    // parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
    // parse application/json
app.use(express.json())

app.get('/', (req, res) => {
    // send 的好处
    // 1 自动监测响应内容的类型(文本..?)
    // 2 自动设置http状态码
    // 3 自动设置响应的内容类型和编码
    res.send('hello express')
})

app.post('/', async(req, res) => {
    console.log('connect to /set');
    const body =
        await fs.writeFile('pos.txt', JSON.stringify(req.body), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success!');
            }
        })
    res.send('set received!')
})


app.get('/list', (req, res) => {
        res.send({ name: '123', age: 20 })
    })
    // 监听端口

// 这个没有 next，所以执行完这个后面的就不会再执行了
// 并且这里已经 res.end 了，等于说已经回应给客户端了，后续不能接 next 了
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
        // next()
})

app.listen(3000);
console.log('start!');
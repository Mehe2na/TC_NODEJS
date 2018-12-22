var http = require('http')
var express = require('express')
 
 
var app = express()
 
var members = {
    1: {
        name: "Mehenna"
    }
    2: {
        name: "Aymen"
    }
    3: {
        name: "Youcef"
    }
}
  
app.get('/members/:id', (req, res) => {
    res.send(   JSON.stringify(members[req.params.id])  )
})
 
app.get('/members/', (req, res) => {
    let id = parseInt(Object.keys(members).sort().pop()) + 1
 
    console.log(req.query)
    members[id] = {
        name: req.query.name
    }
 
 
    res.send( JSON.stringify({}) )
})

app.post('/members/', (req, res) => {
    res.send( members.splice(1,0,"Salah") )
})

app.delete('/members/1', (req, res) => {
    res.send( removeFirst(members) )
})
 
app.listen(8888)
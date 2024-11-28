// console.log("Express ")
let express = require('express')
// console.log(express)

let app = express()
// console.log(app)

app.get('/',(req,res)=>{

    console.log(res)
    res.send('This is express application')
})

app.post('/submit',(req,res)=>{
    res.send('Data submitted')
})

app.put('/update',(req,res)=>{
    res.send('Data updated')
})


app.delete('/delete',(req,res)=>{
    res.send('Data deleted')
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is started o http://localhost:${PORT}`)
})
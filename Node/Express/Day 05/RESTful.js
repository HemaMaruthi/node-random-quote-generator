let express = require('express')
let app = express()
app.use(express.json());

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
let users = [
    {id:1,name:'Hema'},
    {id:2, name:'Mahesh'},
    {id:3, name:'TATA'}

]
app.get("/user-get-data", (req, res) => {
  res.send(
    // `<h1>${users[0].name}</h1>
    // `

    `
        <div>${users.map((user) => {
          // console.log(user)
          return (`<h3>${user.id}</h3>
                        <h1>${user.name}</h1>
               `);
        })}</div>
        `
  );
});

app.post('/user-post-data',(req,res)=>{

    console.log(users)
    newUsersData = {
        id:req.body.id,
        name:req.body.name
    }
    console.log(newUsersData)
    users.push(newUsersData)
    res.json(users)
})

app.put('/users-update-data/:id',(req,res)=>{

    let userId = parseInt(req.params.id)
    console.log(req.body)
    console.log(userId)
    let {name} = req.body;
    let userIndex = users.findIndex((user)=>{
        console.log(user.id === userId)
        return user.id === userId
    })
    console.log(userIndex)
    users[userIndex].name = name
    console.log(`User with ID ${userId} updated:`, users[userIndex]);
    res.json(users)
})

app.delete('/users-delete-data/:id',(req,res)=>{
    let userId = parseInt(req.params.id)
    console.log(req.body)
    console.log(userId)
    let userIndex = users.findIndex((user)=>{
        console.log(user.id === userId)
        return user.id === userId
    })
    console.log(userIndex)
    let deletedUser =  users.splice(userIndex,1)
    console.log(`User with ID ${userId} deleted:`, deletedUser[0]);
   res.json(users)

})
let PORT = 3000
app.listen(PORT,()=>{
    console.log(`server is started o http://localhost:${PORT}`)
})
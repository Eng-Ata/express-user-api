const express = require('express')

const app = express()

app.use(express.json())


const userlist = [{ id: 32, firstname: 'Ata', lastname: 'gh' }, { id: 1, firstname: 'amir', lastname: 'rh' }]


app.get('/listusers', (req, res) => {

    res.status(200).send(userlist)
})

// ------------------------------------------------------------------------------

app.get('/userby/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i <= userlist.length; i++) {
        if (id == userlist[i].id) {
            res.status(201).send(userlist[i])
        }
    res.status(404).send('not found')

    }
})
//--------------------------------------------------------------------------

let userlist2 = []

app.post('/signup', (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    let object = {username , password }
    userlist2.push(object)
    console.log(userlist2);
    res.status(200).send('data added')

    
})
//---------------------------------------------------------------------------

app.listen(3000, () => {
    console.log('server is run')

})

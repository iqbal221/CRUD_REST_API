const data = require('../utils/database/users.json')

// random user
module.exports.getRandomUser = (req,res)=>{
    const id = Math.floor(Math.random()*7+1)
    console.log(id)
    const newUser = data.find(user=>user.Id == id)
    if(newUser){
        res.send(newUser)
    }else{
        res.send('Please select correct id')
    }
}

// all users
module.exports.getAllUsers = (req,res)=>{
    const limit =  req.query.limit;
    res.send(data.slice(0,limit))
}

// save user
module.exports.saveUsers = (req,res)=>{
    const usersInfo = req.body;
    const {Id,name,gender,address,contact,photoUrl} = usersInfo;
    if(Id && name && gender && address && contact && photoUrl){
        data.push(usersInfo)
        console.log(usersInfo)
        res.send(data)
    }else{
        res.send('Please required all input value')
    }
   
}

// update user
module.exports.updateUsers = (req,res)=>{
    const id = req.params.id;
    const newInfo = req.body;
   
    const newUser = data.find(user=>user.Id == id)
    if(newUser){
        newUser.id = newInfo.id;
        newUser.name = newInfo.name;
        newUser.gender = newInfo.gender
        newUser.contact = newInfo.contact
        newUser.address = newInfo.address
        console.log(newUser)
        res.send(data)
    }else{
        res.send('Please select correct id')
    }
}

// delete user
module.exports.deleteUsers = (req,res)=>{
    const id = req.params.id;

    const existdata = data.find(user=>user.Id === Number(id))
   
    if(existdata){
        remainData = data.filter(user=>user.Id !== existdata.Id);
        res.send(remainData)
    }else{
        res.send('Please select correct id') 
    }
}


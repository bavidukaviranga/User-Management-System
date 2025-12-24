const User = require("../Model/UserModel");
//function to data display
const getAllUsers = async (req, res, next)=>{
    let Users;
    //Get all users
    try{
        users = await User.find();
    }catch (err) {
        console.error(err);
    } 
    //not found
    if (!users){
        return res.status(404).json({message:"User not found"});
    }
    //Display all users
    return res.status(200).json({users});
};

//data insert
const addUsers = async (req, res, next) =>{
    const {name, gmail, age, address}= req.body;
    let users;

    try{
        users = new User({name, gmail, age,address});
        await users.save();

    }catch(err){
        console.log(err);
    }
    //not insert users
    if(!user){
        return res.status(404).send({message: "Unable to add users"});

    }
            return res.status(200).json({user});


};

//get by id
const getById = async (req, res, next) =>{

    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);  
    }
    //not available users
    if(!user){
        return res.status(404).send({message: "User Not Found"});

    }
            return res.status(200).json({user});
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
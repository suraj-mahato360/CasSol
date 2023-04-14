const asyncHandler = require("express-async-handler")
const User = require("../model/Schema")

//@desc Get all tasks
//@route GET /api/tasks
//@access public

const getUser = asyncHandler(async (res, req)=>{
    const users = await User.find()
    res.status(200).json(users);
});

//@desc Post all tasks
//@route POST /user/data
//@access public

const postUser = asyncHandler(async (res, req)=>{
    console.log(req.body)
    const {email,
    name,
    monthlySaving,
    foodnPerson,
    educationExpense,
    transportExpense,
    housingExpense,
    salary} = req.body;
    
    const user = await User.create({
    email,
    name,
    monthlySaving,
    foodnPerson,
    educationExpense,
    transportExpense,
    housingExpense,
    salary
    })
    res.status(201).json(user);
});

module.exports = {getUser, postUser}

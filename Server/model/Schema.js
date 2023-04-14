const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    monthlySaving: { type: Number },
    foodnPerson: { type: Number },
    educationExpense: { type: Number },
    transportExpense: { type: Number },
    housingExpense: { type: Number },
    salary: { type: Number }
})

module.exports = mongoose.model('USER', userSchema)



// {
//     "email": "test@gmail.com",
//     "name": "Alex holland",
//     "monthlySaving": 25000,
//     "foodnPerson": 5000,
//     "educationExpense": 50000,
//     "transportExpense": 9000,
//     "housingExpense": 35000,
//     "salary": 90000
//   }

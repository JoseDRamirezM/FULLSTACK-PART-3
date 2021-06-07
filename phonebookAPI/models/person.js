const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true })
    .then(() => console.log('DB connected!'))
    .catch(err => console.log(err))

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        unique: true
    },
    number: {
        type: String,
        minLength: 8,
        required: true
    }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)
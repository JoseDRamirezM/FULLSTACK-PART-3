const mongoose = require('mongoose')

const url =
// eslint-disable-next-line no-undef
`mongodb://fullstack:${password}@react-apps-cluster-shard-00-00.3ms5g.mongodb.net:27017,react-apps-cluster-shard-00-01.3ms5g.mongodb.net:27017,react-apps-cluster-shard-00-02.3ms5g.mongodb.net:27017/phonebook?ssl=true&replicaSet=atlas-p9dl6q-shard-0&authSource=admin&retryWrites=true&w=majority`


mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true })
    .then(() => console.log('DB connected!'))
    .catch(err => console.log(err))

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

// eslint-disable-next-line no-undef
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,
    // eslint-disable-next-line no-undef
    number: number,
})

if (name !== undefined) {
    person
        // eslint-disable-next-line no-unused-vars
        .save().then(result => {
            console.log('person saved!')
            mongoose.connection.close()
        })
        .catch(err => {
            console.log(err)
            mongoose.connection.close()
        })
} else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}





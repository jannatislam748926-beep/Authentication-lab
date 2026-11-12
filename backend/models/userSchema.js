// Database lagbe na - users.json file e data save hobe.
// Interface mongoose er moto: UserSchema.find({email}) ar new UserSchema({...}).save()
const fs = require('fs')
const path = require('path')

const FILE = path.join(__dirname, '..', 'users.json')

const readAll = () => {
    try {
        return JSON.parse(fs.readFileSync(FILE, 'utf8'))
    } catch (err) {
        return []
    }
}

class UserSchema {
    constructor({ username, email, password }) {
        this._id = Date.now().toString() + Math.floor(Math.random() * 1000)
        this.username = username
        this.email = email
        this.password = password
    }

    static async find({ email }) {
        return readAll().filter((user) => user.email === email)
    }

    async save() {
        const users = readAll()
        users.push({ ...this })
        fs.writeFileSync(FILE, JSON.stringify(users, null, 2))
        return this
    }
}

module.exports = UserSchema

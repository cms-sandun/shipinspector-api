const db = require('_helpers/db');
const bcrypt = require('bcrypt');

const User = db.User;

module.exports = {
    getAll,
    create
};

async function getAll(accountId) {
    return await User.find({accountId:accountId}).select('-hash');
}

async function create(userParam) {
    // validate
    const user = new User(userParam);

    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    savedObject = await user.save();

    return {'status': 'success','user':savedObject}
}



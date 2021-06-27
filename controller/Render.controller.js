const userModel = require('../model/user.model');

const render = (request, response) => {

    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.save();
            response.send(userData)
        }

    });
}

module.exports = render;
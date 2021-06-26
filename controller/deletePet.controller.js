const userModel = require('../model/user.model');

const deletePet = (request, response) => {
    const petIndex = request.params.pet_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.pets.splice(petIndex, 1);
            userData.save();
            response.send(userData)
        }

    });
}

module.exports = deletePet;
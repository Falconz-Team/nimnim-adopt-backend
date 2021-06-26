const userModel = require('../model/user.model');

const updatePet = (request, response) => {
    const petIndex = request.params.pet_idx;
    const { email, breed, age, gender, description, image_Url } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.pets.splice(petIndex, 1, {
                breed,
                age,
                gender,
                description,
                image_Url
            });
            userData.save();
            response.send(userData);
        }

    });
}

module.exports = updatePet;
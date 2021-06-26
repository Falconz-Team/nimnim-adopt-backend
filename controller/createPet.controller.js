const userModel = require('../model/user.model');

const createPet = (req, res) => {
    console.log('befor');
    const { email, breed, age, gender, description, image_Url } = req.body;
    console.log(req.body);
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            if (userData == null) {
                userData = new userModel({ email, pets: []});
            }
            userData.pets.push({
                breed,
                age,
                gender,
                description,
                image_Url
            });
            userData.save();
            res.json(userData);
        }
    });
}

module.exports = createPet;


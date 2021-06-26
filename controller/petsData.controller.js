
const Data = require('../assets/petsData.json')

const petsDataController = (req, res) => {
    res.json(Data)
}

module.exports = petsDataController
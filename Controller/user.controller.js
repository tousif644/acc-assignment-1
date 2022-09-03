// requiring json file
let jsonFile = require('../public/users.json');
let underScore = require('underscore');

module.exports.getRandomUser = (req, res) => {
    const { limit } = req.query;
    let slicedData = jsonFile.slice(0, limit);
    let randomNumber = Math.floor(Math.random() * slicedData.length);
    res.json(slicedData[randomNumber])
}

module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    res.send(jsonFile.slice(0, limit));
    res.end()
}

module.exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    if (underScore.isNaN(id)) {
        res.send("String and Object is not valid")
    }
    const gettingData = (jsonFile.find(user => user.id === id))
    if (Object.values(gettingData).includes(id)) {
        console.log(id);
        res.send(gettingData)
    } else {
        res.send(gettingData.name)
    }
}

module.exports.saveARandomUser = (req, res) => {
    const body = req.body;
    if (body.name && body.gender && body.address && body.photoUrl && body.contact) {
        jsonFile.push(body);
        res.send(jsonFile)
        res.end()
    } else {
        res.send(`Need all properties
            1.Name
            2.Gender
            3.Contact
            4.Address
            5.PhotoUrl

            You are missing something re check
        `)
    }

}
module.exports.updateRandomUser = (req, res) => {
    const id = parseInt(req.params.id);

    if (underScore.isNaN(id)) {
        res.send("String and Object is not valid")
    }
    const updateData = (jsonFile.find(user => user.id === id));
    if (updateData.id === undefined) {
        res.write('Error happend')
    }
    //getting data from body
    updateData.id = id;
    updateData.gender = req.body.gender;
    updateData.name = req.body.name;
    updateData.address = req.body.address;
    updateData.contact = req.body.contact
    updateData.photoUrl = req.body.photoUrl;
    res.send(updateData)

}
module.exports.bulkUpdate = (req, res) => {
    // const { id } = req.params
    const { id, secondId, thirdId } = req.params
    const newData = jsonFile.find(users => users.id === Number(id));
    const secondData = jsonFile.find(users => users.id === Number(secondId));
    const thirdData = jsonFile.find(users => users.id === Number(thirdId));

    // first data
    newData.id = parseInt(id);
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;
    newData.contact = req.body.contact;


    // second data
    secondData.id = parseInt(id);
    secondData.name = req.body.name;
    secondData.gender = req.body.gender;
    secondData.address = req.body.address;
    secondData.photoUrl = req.body.photoUrl;
    secondData.contact = req.body.contact;

    // third data
    thirdData.id = parseInt(id);
    thirdData.name = req.body.name;
    thirdData.gender = req.body.gender;
    thirdData.address = req.body.address;
    thirdData.photoUrl = req.body.photoUrl;
    thirdData.contact = req.body.contact;

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let firstData = JSON.stringify(newData);
    let secondlyData = JSON.stringify(secondData);
    let thirdlyData = JSON.stringify(thirdData);

    res.write(firstData);
    res.write(secondlyData);
    res.write(thirdlyData);
    res.end()
    res.end()
}
module.exports.deleteOneUser = (req, res) => {
    const id = parseInt(req.params.id);
    if (id.toString().length > 2 || id.toString().length <= 0 || jsonFile.length < 0 || id === 0) {
        res.send(`We have Only ${jsonFile.length} data`)
    }
    if (underScore.isNaN(id)) {
        res.send("String and Object is not valid")
    } else {
        jsonFile = jsonFile.filter(user => user.id !== id)
        res.send(jsonFile)
    }
    res.send(jsonFile)
}


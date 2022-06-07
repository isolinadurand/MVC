const path = require ('path');
const home = path.join(__dirname, '../views/home.html');
const about = path.join(__dirname, '../views/about.html');

const mainController = {
    main: function (req, res) {
        res.sendFile(home)
    },
    about: function (req, res) {
        res.sendFile(about)
    }

};



module.exports = mainController;
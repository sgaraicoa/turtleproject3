const Cocktails = require('../../models/cocktails');

const controller = {};

controller.index = (req, res) => {
  Cocktails
        .findAll()
        .then((response) => {
          console.log(response);
          res.json(response);
        });
    };

// controller.create = (req, res) => {
//   console.log("creating:" req.body);
// };

module.exports = controller;

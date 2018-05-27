var Animal = require('../models/animal')

module.exports = class AnimalsController {
  static index(req, res, next) {
    Animal.find()
      .exec((err, animals) => {
        return res.send(animals)
      })
  }
}

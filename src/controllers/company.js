var express = require('express');
var router = express.Router();
var companyModel = require('../models/company')

router.get('/getAll', function (req, res) {
  companyModel.find().exec((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ data })
    }
  })
});

router.get('/:id', function (req, res) {
  companyModel.findById(req.params.id).exec((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ data })
    }
  })
});

router.post('/',function (req, res) {
  var newCompany = new companyModel({name: req.body.name})
  newCompany.save((err, company) => {
    res.send(company)
  })
});

router.delete('/:id', function (req, res) {
  companyModel.deleteOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ data })
    }
  })
})

router.put('/:id', function (req, res) {
  companyModel.updateOne({ _id: req.params.id}, { name: req.body.name }).exec((err, data) =>{
    if (err) {
      res.send(err)
    } else {
      res.json({ data })
    }
  })
})

module.exports = router;
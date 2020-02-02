var express = require('express');
var router = express.Router();
var companyModel = require('../models/company')
var employeeModel = require('../models/employee')

router.get('/getAll', function (req, res) {
  companyModel.find().exec((err, data) => {
    if (err) {
      res.status(400).json({ "erro": err })
    } else {
      res.status(200).json({ data })
    }
  })
});

router.get('/:id', function (req, res) {
  companyModel.findById(req.params.id).exec((err, data) => {
    if (err) {
      res.status(400).json({ "erro": err })
    } else {
      res.status(200).json({ data })
    }
  })
});

router.post('/', function (req, res) {
  var newCompany = new companyModel({ name: req.body.name })
  newCompany.save((err, company) => {
    if (err) {
      res.status(400).json({ "erro": err })
    } else {
      res.status(200).json({ company })
    }
  })
});

router.delete('/:id', function (req, res) {
  companyModel.deleteOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      res.status(400).json({ "erro": err })
    } else {
      res.status(200).json({ data })
    }
  })
})

router.put('/:id', function (req, res) {
  companyModel.updateOne({ _id: req.params.id }, { name: req.body.name }).exec((err, data) => {
    if (err) {
      res.status(400).json({ "erro": err })
    } else {
      res.status(200).json({ data })
    }
  })
})

router.post('/addEmployee', async (req, res) => {
  const companyId = req.body.companyId
  const employeeId = req.body.employeeId

  try {
    var employee = await employeeModel.findById(employeeId)
    var company = await companyModel.findById(companyId)
    
    company.employees.push(employee)

    company.save().then((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json({ data })
      }
    })
  } catch (error) {
    res.status(400).json({ "erro": error.message })
  }
})

module.exports = router;
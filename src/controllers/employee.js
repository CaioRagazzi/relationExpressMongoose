var express = require('express');
var router = express.Router();
var employeeModel = require('../models/employee')

router.get('/getAll', function (req, res) {
    employeeModel.find().exec((err, employees) => {
        if (err) {
            res.status(400).json({ "erro": err })
        } else {
            res.status(200).json({ employees })
        }
    })
});

router.get('/:id', function (req, res) {
    employeeModel.findById(req.params.id).exec((err, employee) => {
        if (err) {
            res.status(400).json({ "erro": err })
        } else {
            res.status(200).json({ employee })
        }
    })
})

router.post('/', function (req, res) {
    var newEmployee = new employeeModel({ name: req.body.name })
    newEmployee.save((err, employee) => {
        if (err) {
            res.status(400).json({ "erro": err })
        } else {
            res.status(200).json({ employee })
        }
    })
});

router.delete('/:id', function (req, res) {
    employeeModel.deleteOne({ _id: req.params.id }).exec((err, data) => {
        if (err) {
            res.status(400).json({ "erro": err })
        } else {
            res.status(200).json({ data })
        }
    })
})

router.put('/:id', function (req, res) {
    employeeModel.updateOne({ _id: req.params.id }, { name: req.body.name }).exec((err, data) => {
        if (err) {
            res.status(400).json({ "erro": err })
        } else {
            res.status(200).json({ data })
        }
    })
})

module.exports = router;
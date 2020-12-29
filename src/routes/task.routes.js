const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Return all the task from the table
router.get( '/requests', ( req, res) => {    
    const insertData = 'Select * from restServicesController';
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.json(rows);            
        } else {
            console.log(err);
        }
    });
});

//getAPower endpoint
router.post( '/getAPower', ( req, res) => {
    const{ power} = req.body;        
    const result = Math.pow(power,2);

    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) 
                    VALUES('null','null', 'null', '${power}', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.send(`successfully complete the task, the result is: '${result}'`)            
            console.log('Power' + ' ' + power );
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});

//getASum endpoint
router.post( '/getASum', ( req, res) => {
    const{ valueA , valueB} = req.body;
    const result = parseInt(valueA) + parseInt(valueB);
    
    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) 
                    VALUES('${valueA}','${valueB}', 'null', 'null', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.send(`successfully complete the task, the result of get a sum is: '${result}'`)
            console.log('valueA' + ' ' + valueA );
            console.log('valueB' + ' ' + valueB );            
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});

const newLocal = '/getAProduct';
//getAProduct endpoint
router.post( newLocal, ( req, res) => {
    const{ product} = req.body;    
    const result = product * 2;
    
    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) 
                    VALUES('null','null', '${product}', 'null', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.send(`successfully complete the task, the result is: '${result}'`)            
            console.log('Product' + ' ' + product );            
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});

//getAPower endpoint
router.post( '/getAPower', ( req, res) => {
    const{ power} = req.body;        
    const result = Math.pow(power,2);

    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) 
                    VALUES('null','null', 'null', '${power}', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.send(`successfully complete the task, the result is: '${result}'`)            
            console.log('Power' + ' ' + power );
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});

//endpoint from the web app
router.get( '/', ( req, res) => {
    const{ valueA , valueB} = req.query;
    const product = parseInt(valueA) + parseInt(valueB);
    const power = product * 2;
    const result = Math.pow(power,2);

    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) 
                    VALUES('${valueA}','${valueB}', '${product}', '${power}', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.send(`successfully complete the task, the result is: '${result}'`)
            console.log('valueA' + ' ' + valueA );
            console.log('valueB' + ' ' + valueB );
            console.log('Product' + ' ' + product );
            console.log('Power' + ' ' + power );
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});

//endpoint from postman
router.post( '/', ( req, res) => {
    const{ valueA , valueB} = req.body;    
    const product = parseInt(valueA) + parseInt(valueB);
    const power = product * 2;
    const result = Math.pow(power,2);

    const insertData = `INSERT INTO restServicesController (valueA, valueB, product, power, result) VALUES('${valueA}','${valueB}', '${product}', '${power}', '${result}' )`;
     mysqlConnection.query(insertData, (err, rows, fields) => {
        
        if(!err) {
            res.json({ Status: 'Task complete',
                       Result: `'${result}`
        })
            console.log('valueA' + ' ' + valueA );
            console.log('valueB' + ' ' + valueB );
            console.log('Product' + ' ' + product );
            console.log('Power' + ' ' + power );
            console.log('Result' + ' ' + result );
        } else {
            console.log(err);
        }
    });
});



module.exports = router;
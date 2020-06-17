const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// PUT Route
router.post('/players/:name/:time', (req, res) => {
    const id = req.params.name;
    const time = req.params.time;
    console.log(id);
    let queryText = 'INSERT INTO winners (username,recordTime) VALUES($1,$2)';
    pool.query(queryText, [id, time]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus('ERROR', 500);
    });
}); // END PUT Route

// GET Route
router.get('/winners', (req, res) => {
    const queryText = 'SELECT * FROM winners ORDER BY recordtime ASC LIMIT 10';
    pool
        .query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error while making query: ${queryText}\nERRCODE: ${error}`)
        })

});
router.get('/new', (req, res) => {
    const newList = [];
    queryText = 'SELECT * FROM words';
    pool.query(queryText).then((response) => {
        const data = response.rows;
        while (newList.length < 15) {
            const rando = (Math.floor(Math.random() * 83) + 1)
            newList.push(data[rando].word)
        }
        res.send(newList);
    })
})
module.exports = router;
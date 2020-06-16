const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

const list = ['the', 'and', 'of', 'a', 'fortitude', 'slice', 'pie', 'mine',
    'though', 'through', 'it', 'in', 'my', 'sandwich', 'big', 'cool', 'bus',
    'mouse', 'keyboard', 'code', 'game', 'speed', 'typing', 'for', 'you', 'me',
    'another', 'one', 'two', 'three', 'parameter', 'react', 'function', 'require'
    , 'express', 'math', 'router', 'random', 'artificial', 'intelligence', 'mentality',
    'instructions', 'new', 'application', 'app', 'giant', 'facebook', 'google', 'stack'
    , 'overflow', 'youtube', 'tutorial', 'reddit', 'inline', 'functional', 'component', 'prop',
    'put', 'get', 'delete', 'request', 'client', 'server', 'database', 'render', 'state',
    'live', 'alert', 'bootstrap', 'stream', 'scope', 'distance', 'this', 'restart', 'node', 'nodemon'
    , 'npm', 'start', 'connection', '404']
// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    let queryText = 'UPDATE photos SET likes = likes+1 WHERE id=$1;';
    pool.query(queryText, [id]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus('ERROR', 500);
    });
}); // END PUT Route

// GET Route
router.get('/winners', (req, res) => {
    const queryText = 'SELECT * FROM photos ORDER BY id ASC';
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
    newList = []
    for (let i = 0; i < 10; i++) {
        tempList = [...newList, list[Math.floor(Math.random() * list.length)]]
        newList = tempList;
    }
    console.log(newList);
    res.send(newList);
})
module.exports = router;
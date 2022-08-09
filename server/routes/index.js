const express = require('express');
const router = express();
const db = require('../config/db')
 
// http://localhost:4000/api 으로 접속 시 응답메시지 출력
router.get('/test', (req,res) => {
    db.query('SELECT * FROM posts', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})



module.exports = router;
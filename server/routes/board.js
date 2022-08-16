
const express = require('express');
const router = express();
const db = require('../config/db')


 
// http://localhost:4000/board 으로 접속 시 응답메시지 출력

router.get(`/:category_id`, (req, res) => {
    var params = req.params;
    // db.query(`SELECT * FROM posts where category_id = ${params.category_id}`,(err,data)=>{
    //     if(!err) res.send({ products : data});
    //     else res.send(err);
    // })
    db.query(`select posts.id,title,category_id,nickname,author_id,content,thumbnail,posts.created_at,posts.updated_at,posts.deleted_at from posts left join users on users.id = posts.author_id where category_id = ${params.category_id}`,(err,data)=>{
        if(!err) res.send({ products : data});
        else res.send(err);
    })
    
});



module.exports = router;
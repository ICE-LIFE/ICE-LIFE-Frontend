// express 모듈 호출
const express = require('express');
const app = express();
const api = require('./routes/index');
const board = require('./routes/board');
const PORT = 4000;


// api 처리는 './routes/index'에서 일괄처리
app.use('/api', api);
 

app.use('/board', board);
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})

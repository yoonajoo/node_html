let express = require('express');   // 1,2번 코드는 웹 서버를 돌려주는 코드
let app = express();
let router = require('./router/main')(app); // main 실행
let port = process.env.PORT || 3000;    // 3000번 포트를 사용하겠다

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));  // public 폴더 지정

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});

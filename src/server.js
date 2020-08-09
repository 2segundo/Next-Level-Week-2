// Server
const express = require('express');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccessInsert}  = require ('./pages');

// configure nunjucks (tempalte engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inite and configuration of the server
server
// receive datas of the req.body
.use(express.urlencoded({ extended: true }))
// configure files statics (css, scripts, images)
.use(express.static("public"))
// routes aplication
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success-insert", pageSuccessInsert)
.post("/save-classes", saveClasses)
// start server
.listen(5500)

// Para futuras inseções em servidores
// .listen(PORT = process.env.PORT || 5000, () => console.log(`Listening on ${ PORT }`))
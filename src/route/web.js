const express = require('express');


let router = express.Router();

let initialWebRoutes = (app)=>{
    router.get('/',(req,res)=>{
        return res.send("hello nodeJS hehe");
    });



    return app.use("/", router);

}
module.exports = initialWebRoutes;
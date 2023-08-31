const express = require('express');
const homeController = require('../controllers/homeController');

let router = express.Router();

let initialWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage);

    router.get('/binh',(req,res)=>{
        return res.send("hello Binh");
    });



    return app.use("/", router);

}
module.exports = initialWebRoutes;

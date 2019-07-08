module.exports = function(app){
    app.get('/user', callUserFunction);

    function callUserFunction(req, res){
        res.send("user api call");
    }
}
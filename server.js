module.exports = function (app) {
    const bp = require('body-parser');
    const cors = require('cors');
    require('dotenv/config')

    const mongoose = require('mongoose');

    mongoose.connect(process.env.MONGOPATH, { useNewUrlParser: true })
        .then(res => {
            console.log("MongoDb connected Successfully");
        })
        .catch(err => {
            console.error(`MongoDb Connecttion error:- ${err}`);
        })

    app.use(bp.json());
    app.use(cors());

    require(process.env.ROUTER);

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on ${process.env.PORT}`)
    })
}
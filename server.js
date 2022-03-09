const express = require('express'); // handle http requests and routing
const cors = require('cors'); // allows client to talk to frontend
const bodyParser = require('body-parser'); // allows backend to read data sent from frontend
const morgan = require('morgan'); // log http requests to the console

const app = express();

var corsOptions = {
    orgin: 'http://localhost:8081'
}

app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and re-sync db.');
// });

app.get('/', (request, response) => {
    response.json({
        message: 'Testing ExpressJS'
    });
});

require('./app/routes/gameslibrary.routes.js')(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

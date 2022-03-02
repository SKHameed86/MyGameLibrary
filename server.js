const express = require('express'); // handle http requests and routing
const cors = require('cors'); // allows client to talk to frontend
const bodyParser = require('body-parser'); // allows backend to read data sent from frontend
const morgan = require('morgan'); // log http requests to the console

const app = express();

var corsOptions = {
    orgin: "http://localhost:8081"
}

app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.json({
        message: 'Testing ExpressJS'
    });
});

const port = process.env.PORT || 8000;

require("./app/routes/gameslibrary.routes.js")(app);
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
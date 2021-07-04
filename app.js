const express = require ('express')
const logger = require ('morgan');
const index = require ('./server/routes/index.js');

const app = express();

// port
const port = process.env.PORT || 6060;
app.set('port', port);

// log request to console
app.use(logger('dev'));

// parse incoming request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/', index);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

export default app;
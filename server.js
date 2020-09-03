const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');

const app = express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000..');
});

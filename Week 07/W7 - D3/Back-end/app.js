
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/connection');
const personRoutes = require('./routes/person.routes');
const movieRoutes = require('./routes/movies.routes');
const personsRoutes = require('./routes/persons.routes');
const productRoutes = require('./routes/products.routes');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

connectDatabase();

app.use('/persons', personRoutes);
app.use('/movies', movieRoutes);
app.use('/person', personsRoutes);
app.use('/products', productRoutes);

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.clear();
        console.log(`Server is live on ${port}`);
    }
});
module.exports = app;
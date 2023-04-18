const express = require('express');
const salesRouter = require('./routes/sales_route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/sales', salesRouter);



app.get('/test', (req, res) => {
    sql.connect(config, (err) => {
        if (err) console.log(err);
        const request = new sql.Request();
        request.query('select * from [dbo].[tbMaster_Bank]', (err, result) => {
            if (err) console.log(err);
            res.send(result);
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

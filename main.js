const express = require('express');

const app = express();

const Item = require('./index.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/menu', (req, res) => {
    res.json(Item.getAllIDs());
    return;
});

app.get('/menu/:id', (req, res) => {
    let x = Item.findByID(req.params.id);
    if (x == null) {
        res.status(404).send("Item not found");
        return;
    }
    res.json(x);
} );

app.post('/menu', (req, res)=> {
    let {title, price} = req.body;

    let m = Item.create(title, price);
    if (m == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(b);
});

app.put('/menu/:id', (req, res) => {
    let b = Item.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Item not found");
        return;
    }

    let {name, price} = req.body;
    b.name = name;
    b.price = price;
    b.update();

    res.json(b);
});

app.delete('/menu/:id', (req, res) => {
    let b = Item.findByID(req.params.id);
    if (b == null) {
        res.status(404).send("Item not found");
        return;
    }
    b.delete();
    res.json(true);
})

const port = 3030;
app.listen(port, () => {
    console.log("Tutorial1 up and running on port " + port);
});
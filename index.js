console.log("registeresd");

const express = require('express');

const app = express();

const Item = require('./menu.js');

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
    let {name, price} = req.body;

    let m = Item.create(name, price);
    if (m == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(m);
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Tutorial1 up and running on port " + port);
});


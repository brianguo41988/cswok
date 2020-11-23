const menu_data = require('data-store')({ path: process.cwd() + '/data/menu.json' });
const express = require('express');

const app = express();

const Item = require('./menu.js');

const bodyParser = require('body-parser');
const Menu = require('./menu.js');

app.use(bodyParser.json());

app.get('/menu', (req, res) => {
    res.json(Item.getAllIDs());
    console.log(menu_data.length + "menu length");
    // let x = Item.findByID(req.params.id);
    // if (x == null) {
    //     res.status(404).send("Item not found");
    //     return;
    // }
    // res.json(x);
    // res.json(Item.getAllNames());
    return;
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  app.get('/login.html', function (req, res) {
    res.sendfile(__dirname + '/login.html');
  });

  app.get('/contactus.html', function (req, res) {
    res.sendfile(__dirname + '/contactus.html');
  });
  app.get('/index.html', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
  app.get('/menu.html', function (req, res) {
    res.sendfile(__dirname + '/menu.html');
  });
  app.get('/cart.html', function (req, res) {
    res.sendfile(__dirname + '/cart.html');
  });
  app.get('/script.js', function (req, res) {
    res.sendfile(__dirname + '/script.js');
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
// const port = 3030;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Tutorial1 up and running on port " + port);
});

// async function editFun(){
//     console.log("this actually worked");
// }
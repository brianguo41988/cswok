const menu_data = require('data-store')({ path: process.cwd() + '/data/menu.json' });

class Menu {

    constructor (id, name, price, menu) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.menu = menu;
    }

    update () {
        menu_data.set(this.id.toString(), this);
    }

    delete () {
        menu_data.del(this.id.toString());
    }
}

Menu.getAllIDs = () => {
    // Return an array of item ids
    return Object.keys(menu_data.data).map((id => {return parseInt(id);}));
}
Menu.getAllNames = () => {
    // Return an array of item ids
    return Object.keys(menu_data.data).map((id => {return id.name}));
}

Menu.findByID = (id) => {
    let mdata = menu_data.get(id);
    if (mdata != null) {
        return new Menu(mdata.id, mdata.name, mdata.price);
    }
    return null;
    // return menu_data.get(id);
}

Menu.next_id = Menu.getAllIDs().reduce((max, next_id) => {
    if (max < next_id) {
        return next_id;
    }
    return max;
}, -1) + 1;

Menu.create = (name, price) => {
    let id = Menu.next_id;
    Menu.next_id += 1;
    let m = new Menu(id, name, price);
    menu_data.set(m.id.toString(), m);
    return m;
}

//let b1 = new Book(0, "My First Book", 10.50, ['Ketan Mayer-Patel', 'Maitray Patel']);
//book_data.set(b1.id.toString(), b1);
// let m1 = new Menu (8, "addded", 1.20);
// menu_data.set(m1.id.toString(), m1);
console.log("hello");
module.exports = Menu;

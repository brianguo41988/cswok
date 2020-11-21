const menu_data = require('data-store')({ path: process.cwd() + '/data/menu.json' });

class Menu {

    constructor (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    update () {
        menu_data.set(this.id.toString(), this);
    }

    delete () {
        menu_data.del(this.id.toString());
    }
}

Menu.getAllIDs = () => {
    return Object.keys(Menu_data.data).map((id => {return parseInt(id);}));
}

Menu.findByID = (id) => {
    let mdata = menu_data.get(id);
    if (mdata != null) {
        return new Menu(mdata.id, mdata.name, bdata.price);
    }
    return null;
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
    let b = new Book(id, name, price);
    menu_data.set(m.id.toString(), b);
    return m;
}

//let b1 = new Book(0, "My First Book", 10.50, ['Ketan Mayer-Patel', 'Maitray Patel']);
//book_data.set(b1.id.toString(), b1);

module.exports = Menu;
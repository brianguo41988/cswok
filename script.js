// async function fn1() {
//     const result = await axios({
//         method: 'get',
//         url: 'https://cswok.herokuapp.com/menu',
//         // url: 'http://localhost:3030/menu',
//         withCredentials: true,
//       });
//       console.log(result);
//     }
// fn1();


// const Menu = require("./menu");

// const Menu = require("./menu");

 
//   console.log("we have entered the script");
// Menu.create("test1", 5.4);
// fetch("/menu")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data[0]));

// console.log(data[0]);

// let m1 = new Menu (9,"chicken" , 1.20);
// menu_data.set(m1.id.toString(), m1);
async function replySubmit(number){
    const result = await axios({
        method: 'post',
        url: 'https://cswok.herokuapp.com/menu',
        withCredentials: true,
        data: {
          "name": "Sweet Sour Chicken",
          "price": 8
        },
      });
}
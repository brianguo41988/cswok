async function postFn(number, name){
    const result = await axios({	
        method: 'post',	
        url: 'https://cswok.herokuapp.com/menu',	
        withCredentials: true,	
        data: {	
          "name": `${name}`,	
          "price": `${number}`
        },	
      });	
      console.log(name + " has been clicked");
      if (name == "Chicken Broccoli"){
        console.log("I have entered the if");
        $('#iden').append(`<h1>HELLLLLLLLLLLLLLLO</h1>`);
        console.log("finished appending");
      }
}

async function fn1() {
    console.log("entered fn1");
    const result = await axios({
                method: 'get',
                url: 'https://cswok.herokuapp.com/menu',
                withCredentials: true,	
              });	
    for (let i = 0; i < result.data.length; i++){
        const result2 = await axios({
            method: 'get',
            url: `https://cswok.herokuapp.com/menu/${i}`,
            withCredentials: true,	
          });	
          console.log(result2);
    }
}

// async function fn1() {	
//     const result = await axios({
//         method: 'get',
//         url: 'https://cswok.herokuapp.com/menu',
//         withCredentials: true,	
//       });	
//       console.log(result);
//     }
// fn1();
// async function fn2() {	
// const result = await axios({	
//     method: 'post',	
//     url: 'https://cswok.herokuapp.com/menu',	
//     withCredentials: true,	
//     data: {	
//       "name": "Chuicke Brocili",	
//       "price": 4.50	
//     },	
//   });	
// }	
// fn2();	
// console.log("it worked?");	
// async function fn3() {	
//     const result = await axios({	
//         method: 'post',	
//         url: 'https://cswok.herokuapp.com/menu',	
//         withCredentials: true,	
//         data: {	
//           "name": "Chuicke Brocili",	
//           "price": 4.50	
//         },	
//       });	
//     }	
//     fn3();
//     async function fn4() {	
//         const result = await axios({	
//             method: 'post',	
//             url: 'https://cswok.herokuapp.com/menu',	
//             withCredentials: true,	
//             data: {	
//               "name": "Chuicke Brocili",	
//               "price": 4.50	
//             },	
//           });	
//         }	
//         fn4();	
// console.log("it worked?");
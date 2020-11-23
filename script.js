async function replySubmit(number){
    console.log(number);
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
async function fn2() {	
const result = await axios({	
    method: 'post',	
    url: 'https://cswok.herokuapp.com/menu',	
    withCredentials: true,	
    data: {	
      "name": "Chuicke Brocili",	
      "price": 4.50	
    },	
  });	
}	
fn2();	
console.log("it worked?");	
async function fn3() {	
    const result = await axios({	
        method: 'post',	
        url: 'https://cswok.herokuapp.com/menu',	
        withCredentials: true,	
        data: {	
          "name": "Chuicke Brocili",	
          "price": 4.50	
        },	
      });	
    }	
    fn3();
    async function fn4() {	
        const result = await axios({	
            method: 'post',	
            url: 'https://cswok.herokuapp.com/menu',	
            withCredentials: true,	
            data: {	
              "name": "Chuicke Brocili",	
              "price": 4.50	
            },	
          });	
        }	
        fn4();	
console.log("it worked?");
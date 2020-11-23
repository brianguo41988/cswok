console.log("entered login script");
async function loginFn(number, name){
    const result = await axios({	
        method: 'post',	
        url: 'https://cswok.herokuapp.com/menu',	
        withCredentials: true,	
        data: {	
          "name": `${name}`,	
          "price": `${number}`,
          "menu": false
        },	
      });	
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
              for (let i = 0; i < result2.data.length; i++){
              console.log(result2.data.name);
              }
        }
    }
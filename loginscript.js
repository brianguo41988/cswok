console.log("entered login script");
async function signUpFn(number, name){
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
    async function logInFn(number, name) {
        console.log("entered fn1");
        const result = await axios({
                    method: 'get',
                    url: 'https://cswok.herokuapp.com/menu',
                    withCredentials: true,	
                  });	
        for (let i = 0; i < result.data.length; i++){
            console.log("entered for loop");
            const result2 = await axios({
                method: 'get',
                url: `https://cswok.herokuapp.com/menu/${i}`,
                withCredentials: true,	
              });	
              console.log(result2.data)
              if (result2.data[i].menu === false) {
                if (result2.data[i].name === name && result2.data[i].price === number) {
                    console.log("loged in")
                    // location.replace("index.html")
                    // break
                }
              } 
              
              $('#loginRoot').append('<p>You do not have an account</p>')
        }
    }
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
            const result2 = await axios({
                method: 'get',
                url: `https://cswok.herokuapp.com/menu/${i}`,
                withCredentials: true,	
              });	
              
              if (result2.data.menu === false) {
                if (result2.data.name === name && result2.data.price === number) {
                    location.replace("https://cswok.herokuapp.com")
                    break
                }
              } 
              
              $('#loginRoot').append('<p>You do not have an account</p>')
        }
    }
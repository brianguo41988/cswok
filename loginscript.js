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
                  console.log(result.data.length);
        for (let i = 0; i < result.data.length; i++){
            console.log("entered for loop");
            const result2 = await axios({
                method: 'get',
                url: `https://cswok.herokuapp.com/menu/${i}`,
                withCredentials: true,	
              });	
              console.log(result2.data);
              if (result2.data.menu === false) {
                if (result2.data.name === name && result2.data.price === number) {
                    console.log("logged in")
                    // location.replace("index.html")
                    // break
                }
              } 
              console.log("failed to sign in")
              $('#loginRoot').append('<p>You do not have an account</p>')
        }
    }
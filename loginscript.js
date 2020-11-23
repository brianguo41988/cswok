console.log("entered login script");
let accountMade = false;
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
      // window.location.href = `https://cswok.herokuapp.com/login.html`;
      $('#loginRoot').remove();
      $('#loginlogin').append('<div id = "loginRoot"></div>');
      $('#loginRoot').append('<p>Account Made! Please Log in.</p>');
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
                url: `https://cswok.herokuapp.com/menu/${result.data[i]}`,
                withCredentials: true,	
              });	
              console.log(result2.data);
              if (result2.data.menu === false) {
                if (result2.data.name === name && result2.data.price === number) {
                    console.log("logged in")
                    window.location.href = `https://cswok.herokuapp.com/index.html`;
                    break
                }
              } 
              console.log("failed to sign in")
              $('#loginRoot').remove();
              $('#loginlogin').append('<div id = "loginRoot"></div>');
              $('#loginRoot').append('<p>Incorrect username or password</p>');
        }
        if (result.data.length == 0){
          $('#loginRoot').remove();
          $('#loginlogin').append('<div id = "loginRoot"></div>');
          $('#loginRoot').append('<p>Incorrect username or password</p>');
        }
    }
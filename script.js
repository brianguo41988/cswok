async function postFn(number, name){
    const result = await axios({	
        method: 'post',	
        url: 'https://cswok.herokuapp.com/menu',	
        withCredentials: true,	
        data: {	
          "name": `${name}`,	
          "price": `${number}`,
          "menu": true
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
          console.log(result2);
    }
}


  async function deleteFn(number){
    const result = await axios({
      method: 'delete',
      url: `https://cswok.herokuapp.com/menu/${number}`,
      withCredentials: true,
    });
    // refreshCart();
    console.log(number + "number");
  }
async function refreshCart(){
    $('#cartRoot').remove();
    $('#ogCartRoot').append(`<div class="card-body" id = "cartRoot"></div>`);
    console.log("refreshed cart");

    const result = await axios({
        method: 'get',
        url: 'https://cswok.herokuapp.com/menu',
        withCredentials: true,	
      });	
      // if statement here if not null
    for (let i = 0; i < result.data.length; i++){
      console.log(result.data[i].id);
    }
}
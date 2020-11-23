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

async function refreshCart(){
    $('#cartRoot').remove();
    $('#ogCartRoot').append(`<div class="card-body" id = "cartRoot"></div>`);
    console.log("refreshed cart");

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
        if (result2.data.name == "Chicken Broccoli"){
            console.log("chichbro");
        }else if (result2.data.name == "Sweet Sour Chicken"){
            console.log("sschi");
        }if (result2.data.name == "General Tsos Chicken"){
            console.log("gtso");
        }if (result2.data.name == "Lo Mein"){
            console.log("lomein");
        }if (result2.data.name == "Fried Rice"){
            console.log("frice");
        }
    }
}
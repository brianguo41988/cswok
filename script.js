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
      if (name == "Chicken Broccoli"){
        $('#root').append(` <!--Item 1 Section:-->
        <div class="row mb-4">
          <div class="col-md-5 col-lg-3 col-xl-3">
            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <!--Item 1 Image-->
              <img class="img-fluid w-100"
                src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" alt="Chicken and Broccoli">
              <a href="#!">
                <div class="mask waves-effect waves-light">                            
                  <div class="mask rgba-black-slight waves-effect waves-light"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div class="d-flex justify-content-between">
                <!--Name and characteristics-->
                <div>
                  <h5>Chicken and Broccoli</h5>
                  <p class="mb-3 text-muted text-uppercase small">Vegan: No</p>
                  <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                  <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                </div>
                <div>
                  <!--number of items in cart box-->
                  <div class="def-number-input number-input safari_only mb-0 w-100">  
                    <input class="quantity" min="0" name="quantity" value="0" type="number">
                  </div>
                  <!--small text under under of items-->
                  <small id="passwordHelpBlock" class="form-text text-muted text-center">
                    (comes with white rice & soup of the day)
                  </small>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <!--can get rid of?: remove item-->
                  <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                      class="fas fa-trash-alt mr-1"></i> Remove item?? </a>
                </div>
                <!--Price of item(s)-->
                <p class="mb-0"><span><strong>$17.99</strong></span></p>
              </div>
            </div>
          </div>
        </div>`);
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
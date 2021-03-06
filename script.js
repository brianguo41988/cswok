$( document ).ready(refreshCart());
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
    refreshCart();
    // console.log(number + "number");
  }
async function checkoutFn(){
  let total = 0.0;
  const result = await axios({
    method: 'get',
    url: 'https://cswok.herokuapp.com/menu',
    withCredentials: true,	
  });	
  // if statement here if not null
for (let i = 0; i < result.data.length; i++){
  // console.log(result.data[i]);
  const result2 = await axios({
    method: 'get',
    url: `https://cswok.herokuapp.com/menu/${result.data[i]}`,
    withCredentials: true,	
});	
if (result2.data.menu == true){
    total += parseFloat(result2.data.price);
  } 
}
let tax = total * 0.07;
tax = tax.toFixed(2);
let ordertotal = parseFloat(tax) + parseFloat(total);
$('#cardBody').remove();
$('#upperCardBody').append(`<div class="card-body" id = "cardBody"></div>`);
$('#cardBody').append(`<!--Price Caculation Section:-->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="mb-3">Price Calculation</h5>

      <ul class="list-group list-group-flush">
        <!--pretax amount-->
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
          Subtotal:
          <span>$${total}</span>
        </li>
        <!--tax-->
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
          Tax:
          <span>${tax}</span>
        </li>
        <!--with tax anount-->
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>Total:</strong>
          </div>
          <span><strong>$${ordertotal}</strong></span>
        </li>
      </ul>
      <!--checkout button-->
      <button type="submit" class="btn btn-primary btn-block waves-effect waves-light" onClick = "placeOrderFn(${ordertotal}, ${tax}, ${total})" id = "placeOrderButton">Place Order</button>

    </div>
  </div>`);

}

async function placeOrderFn(ordertotal, tax, total){
  $('#cardBody').remove();
  $('#upperCardBody').append(`<div class="card-body" id = "cardBody"></div>`)
  $('#cardBody').append(`<div class="card mb-3"><div class="card-body"><strong><h5>Your order has been placed!</h5></strong> <strong><h5 id = "boxCalc"> Please come pick it up in about 15 minutes </h5></strong></div></div>`);
  const result = await axios({
    method: 'get',
    url: 'https://cswok.herokuapp.com/menu',
    withCredentials: true,	
  });	
  for (let i = 0; i < result.data.length; i++){
      const result2 = await axios({
        method: 'get',
        url: `https://cswok.herokuapp.com/menu/${result.data[i]}`,
        withCredentials: true,	
  });	
  if (result2.data.menu == true){
  $('#boxCalc').append(` <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">${result2.data.name}<span>$${result2.data.price}</span></li>`);
  }
}
$('#boxCalc').append(`<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
Pre-tax amount:
<span>$${total}</span>
</li>
<!--tax-->
<li class="list-group-item d-flex justify-content-between align-items-center px-0">
Tax:
<span>${tax}</span>
</li>
<!--with tax anount-->
<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
<div>
  <strong>Total amount of:</strong>
</div>
<span><strong>$${ordertotal}</strong></span>
</li> <button type="submit" class="btn btn-primary btn-block waves-effect waves-light" onClick = "finishFn()" id = "finishButton">Finish</button>`);



}
async function finishFn(){
  clearCart();
  $('#cardBody').remove();
  $('#upperCardBody').append(`<div class="card-body" id = "cardBody">
  <!--checkout button-->
  <div id = "checkoutButtonId"></div>
  <button type="submit" class="btn btn-primary btn-block waves-effect waves-light" onClick = "checkoutFn()" id = "checkOutButton">checkout</button>

</div>
</div>`);

}

async function clearCart(){
  const result = await axios({
    method: 'get',
    url: 'https://cswok.herokuapp.com/menu',
    withCredentials: true,	
  });	
  for (let i = 0; i < result.data.length; i++){
      const result2 = await axios({
        method: 'get',
        url: `https://cswok.herokuapp.com/menu/${result.data[i]}`,
        withCredentials: true,	
  });	
  if (result2.data.menu == true){
    deleteFn(result.data[i]);
  }
  refreshCart();
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
      // if statement here if not null
    for (let i = 0; i < result.data.length; i++){
      // console.log(result.data[i]);
      const result2 = await axios({
        method: 'get',
        url: `https://cswok.herokuapp.com/menu/${result.data[i]}`,
        withCredentials: true,	
    });	
    if (result2.data.menu == true){
      console.log(result2.data.name);
        if (result2.data.name == "Chicken Broccoli"){
            $('#cartRoot').append(` <!--Item 1 Section:-->
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 1 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/FWENsMDwUQMyr26WvTxTDtDZPmroYgOrlNWwhyFZoWa7APVn7rMPAsstB2t7FTM6DnvMAWe-WVe074gir1WjZz3KNjnZ-VFIOF8jGCeAg57aE48gzngLOPGjYkn7std9Uqk5bPtc0VhExNUFTF5LazhfmE0i_65wmzPeUgst2tX5R7eMyxdsi0LI57h9d4LhbVwSlKa9_VD_D_wbBYEgiz5nIs3ecRievOqC9cCW0Iu8Z7FGZGMWxciRF86J93jz9EIeWx-Pa6tuIfeeKl9NBoO5I67pkIiaUhpQO2OR8KUu8BbI2K2neh34dUJwEdD65S68fXGpp87PTrVqUPCKfR-Icp--U7Kd19uowxJsdppJHHVnIooW4mt80SKRoEbYJs9f85Yg7xi2Yk1olFHu14kgY0Wj_Oo2U_Cdvij3iyI7iiYr-SP_gDhG0_f5sKDsDkSpIkeS4o9SgjXm450IPsC7oyQJT-Hv7bKdZ8AfWY56rR6AAGWCjs9p5eVE4KoLAW74BPl0sdUUTciu-8I7ulq8PqcmPGNp10OVM4pRg3xvkN6xOUgp1OJo-fszm7DrKd31FageC06KfyUYnBzbwL-bR9f1oijMSZdXioq7e5qldtSP5huGsVZhijH9ArFR9IhqIhh75LdnUNpozQ4FurP5pds093zA3BboSwgXIFvxyZKqzUW2lnftptjb=s195-no?authuser=0" alt="Chicken and Broccoli">
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
                      <!--small text under under of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                        (comes with white rice & soup of the day)
                      </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                          <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$9.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "Sweet Sour Chicken"){
            $('#cartRoot').append(`
            <!--Item 2 Section:-->
            <hr class="mb-4">
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 2 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/pw/ACtC-3ceRRuuBqpz-rTFs8XTKDXyzFAXpM4RjlrTkoTps_EYq4sL0MAm0xSmPwBzNmyEolrFAqOBfS6Rm6MdKoJMjdfaLqejhLABUtLrHnf5bCwtDoOjBobWBw5DKZhbpLxOuIkponiVRznRh6BV3nIJoHWJ=s794-no?authuser=0" alt="Sweet and Sour Chicken">
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
                      <h5>Sweet and Sour Chicken</h5>
                      <p class="mb-3 text-muted text-uppercase small">Vegan: No</p>
                      <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                      <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                    </div>
                    <div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with white rice & soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$8.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "General Tsos Chicken"){
            $('#cartRoot').append(`<!--Item 3 Section:-->
            <hr class="mb-4">
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 3 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/pw/ACtC-3cPbWQw2z5bp_HUt8ZUpjQzIjxPWD8umJgKz-srNIFFy2OryzIZ21gl1W_-YAV3lN68yVwVxm71Y2Y6OhnTqZEqSTVUxttJPkz5Wg7QOt4TMoz7QOa2VSm4-S6qi5fND_Jl2VmMsNIkfmhYDYV5d7gH=w672-h679-no?authuser=0" alt="General Tso's Chicken (vegan)">
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
                      <h5>General Tso's Chicken (vegan)</h5>
                      <p class="mb-3 text-muted text-uppercase small">Vegan: Yes</p>
                      <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                      <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                    </div>
                    <div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with white rice & soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$9.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "Lo Mein"){
            $('#cartRoot').append(`<!--Item 4 Section:-->
            <hr class="mb-4">
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 4 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/pw/ACtC-3eUn_amK-aW1-FjbcrvJMbS_B5KL5oyf2yaBIcrGsfp9Sm5jCyEs00_BvLGlqAK-hUTQh36QoLJEKewURYVllFbnKvLd6JoypG7biyS1drb7S8mhEuVT7LG8TeBh43CbpekWIDw7PxjFghvYe9ZClDR=w775-h794-no?authuser=0" alt="Lo Mein">
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
                      <h5>Lo Mein</h5>
                      <p class="mb-3 text-muted text-uppercase small">Vegan: Yes</p>
                      <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                      <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                    </div>
                    <div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$5.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "Fried Rice"){
            $('#cartRoot').append(`<!--Item 5 Section:-->
            <hr class="mb-4">
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 5 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/pw/ACtC-3eGPYp2L0LmdRTWXeD53iMRWnnqo0WwmG5xOvinz7VbRqaeWoLSzXPVQPO494o4Qjmis9gdtEerbXNDAFutNJ1jI_2rP5LRn0Zr0WbV0h9cKv32SOLwgMFlRRSe6MzKjuKIhbJVmSwBdcgL5XekpASS=w224-h217-no?authuser=0" alt="Fried Rice">
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
                      <h5>Fried Rice</h5>
                      <p class="mb-3 text-muted text-uppercase small">Vegan: Yes</p>
                      <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                      <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                    </div>
                    <div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$5.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "Egg Roll"){
            $('#cartRoot').append(`<!--Item 6 Section:-->
            <hr class="mb-4">
            <div class="row mb-4">
              <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <!--Item 6 Image-->
                  <img class="img-fluid w-100"
                    src="https://lh3.googleusercontent.com/pw/ACtC-3eegVy1vA_TY6B9u-K96pddMGMg34rCYCahpIIzvgut1Ert5oSEZ5znrVmQx-1O6ixTFlDwbsVn_Ehy9CNQ3s_mMEelhc_bjTtgCHw-P55kJU9gmVgoeLsP2qmxpBNbcrsrrxz-ZPXjknOPaiPQjWWk=w465-h423-no?authuser=0" alt="Egg Rolls">
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
                      <h5>Egg Rolls</h5>
                      <p class="mb-3 text-muted text-uppercase small">Vegan: No</p>
                      <p class="mb-2 text-muted text-uppercase small">GMO: No</p>
                      <p class="mb-3 text-muted text-uppercase small">MSG: No</p>
                    </div>
                    <div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with dipping sauce)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${result.data[i]})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$3.00</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }
      }
    }
    checkoutFn();
}
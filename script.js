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
    console.log(number);
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
    if (result2.data.menu == true){
      console.log(result2.data.name);
        if (result2.data.name == "Chicken Broccoli"){
            $('#cartRoot').append(` <!--Item 1 Section:-->
            <div class="row mb-4" id = "item${i}">
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
                          <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$17.99</strong></span></p>
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
                      <!--number of items in cart box-->
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <input class="quantity" min="0" name="quantity" value="0" type="number">
                      </div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with white rice & soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$35.99</strong></span></p>
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
                      <!--number of items in cart box-->
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <input class="quantity" min="0" name="quantity" value="0" type="number">
                      </div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with white rice & soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$35.99</strong></span></p>
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
                      <!--number of items in cart box-->
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <input class="quantity" min="0" name="quantity" value="0" type="number">
                      </div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$35.99</strong></span></p>
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
                      <!--number of items in cart box-->
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <input class="quantity" min="0" name="quantity" value="0" type="number">
                      </div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with soup of the day)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$35.99</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }else if (result2.data.name == "Egg roll"){
          console.log("entered eggroll");
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
                      <!--number of items in cart box-->
                      <div class="def-number-input number-input safari_only mb-0 w-100">
                        <input class="quantity" min="0" name="quantity" value="0" type="number">
                      </div>
                      <!--small text under number of items-->
                      <small id="passwordHelpBlock" class="form-text text-muted text-center">
                          (comes with dipping sauce)
                        </small>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <!--can get rid of?: remove item-->
                      <button type = "submit" onClick = "deleteFn(${i})"> Remove </button>
                    </div>
                    <!--Price of item(s)-->
                    <p class="mb-0"><span><strong>$35.99</strong></span></p>
                  </div>
                </div>
              </div>
            </div>`);
        }
      }
    }
}
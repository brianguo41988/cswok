function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var urlString = window.location.href;
console.log(urlString);
urlParams = parseURLParams(urlString);
console.log(urlParams);
console.log(urlParams.myCountry[0]);

if (urlParams.myCountry[0] == "Chicken and Broccoli") {
    $('#searchRoot').append(`<div class="single-menu">
    <img src="https://lh3.googleusercontent.com/FWENsMDwUQMyr26WvTxTDtDZPmroYgOrlNWwhyFZoWa7APVn7rMPAsstB2t7FTM6DnvMAWe-WVe074gir1WjZz3KNjnZ-VFIOF8jGCeAg57aE48gzngLOPGjYkn7std9Uqk5bPtc0VhExNUFTF5LazhfmE0i_65wmzPeUgst2tX5R7eMyxdsi0LI57h9d4LhbVwSlKa9_VD_D_wbBYEgiz5nIs3ecRievOqC9cCW0Iu8Z7FGZGMWxciRF86J93jz9EIeWx-Pa6tuIfeeKl9NBoO5I67pkIiaUhpQO2OR8KUu8BbI2K2neh34dUJwEdD65S68fXGpp87PTrVqUPCKfR-Icp--U7Kd19uowxJsdppJHHVnIooW4mt80SKRoEbYJs9f85Yg7xi2Yk1olFHu14kgY0Wj_Oo2U_Cdvij3iyI7iiYr-SP_gDhG0_f5sKDsDkSpIkeS4o9SgjXm450IPsC7oyQJT-Hv7bKdZ8AfWY56rR6AAGWCjs9p5eVE4KoLAW74BPl0sdUUTciu-8I7ulq8PqcmPGNp10OVM4pRg3xvkN6xOUgp1OJo-fszm7DrKd31FageC06KfyUYnBzbwL-bR9f1oijMSZdXioq7e5qldtSP5huGsVZhijH9ArFR9IhqIhh75LdnUNpozQ4FurP5pds093zA3BboSwgXIFvxyZKqzUW2lnftptjb=s195-no?authuser=0" alt="Item1" width="200" height="40">
    <div class="menu-content">
        <h4>Chicken and Broccoli <span>$9</span> </h4>
        <p> Sliced chicken breast cooked with broccoli, soy sauce, honey, hoisin sauce and other ingredients. </p>
        <button type="submit" onClick = "postFn(9, 'Chicken Broccoli')"> add to cart </button>
    </div>
</div>`)
} else if (urlParams.myCountry[0] == "General Tsos chicken(Vegan)") {
    $('#searchRoot').append(`<div class="single-menu">
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3cPbWQw2z5bp_HUt8ZUpjQzIjxPWD8umJgKz-srNIFFy2OryzIZ21gl1W_-YAV3lN68yVwVxm71Y2Y6OhnTqZEqSTVUxttJPkz5Wg7QOt4TMoz7QOa2VSm4-S6qi5fND_Jl2VmMsNIkfmhYDYV5d7gH=w672-h679-no?authuser=0" alt="Item3" width="200" height="40">
                    <div class="menu-content">
                        <h4>General Tso's Chicken (Vegan)<span>$9</span> </h4>
                        <p> Beyond meat and meat subsitutes cooked with hoisin sauce, soy sauce, rice vinegar, ginger, sugar, and garlic. </p>
                        <button type="submit" onClick = "postFn(9, 'General Tsos Chicken')"> add to cart </button>
                    </div>
                </div>`);
}else if (urlParams.myCountry[0] == "Sweet and Sour Chicken") {
    $('#searchRoot').append(`<div class="single-menu">
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3ceRRuuBqpz-rTFs8XTKDXyzFAXpM4RjlrTkoTps_EYq4sL0MAm0xSmPwBzNmyEolrFAqOBfS6Rm6MdKoJMjdfaLqejhLABUtLrHnf5bCwtDoOjBobWBw5DKZhbpLxOuIkponiVRznRh6BV3nIJoHWJ=s794-no?authuser=0" alt="Item2" width="200" height="40">
                    <div class="menu-content">
                        <h4>Sweet and Sour Chicken <span>$8</span> </h4>
                        <p> Fried chicken chunks stir fried with our special sweet and sour sauce (vinegar, soy sauce, sugar, etc). </p>
                        <button type="submit" onClick = "postFn(8, 'Sweet Sour Chicken')"> add to cart </button>
                    </div>
                </div>`);
}else if (urlParams.myCountry[0] == "Lo Mein") {
    $('#searchRoot').append(`<div class="single-menu">
    <img src="https://lh3.googleusercontent.com/pw/ACtC-3eUn_amK-aW1-FjbcrvJMbS_B5KL5oyf2yaBIcrGsfp9Sm5jCyEs00_BvLGlqAK-hUTQh36QoLJEKewURYVllFbnKvLd6JoypG7biyS1drb7S8mhEuVT7LG8TeBh43CbpekWIDw7PxjFghvYe9ZClDR=w775-h794-no?authuser=0" alt="Item4" width="200" height="40">
    <div class="menu-content">
        <h4>Lo Mein <span>$5</span> </h4>
        <p> Egg noodles stir fried with snow peas, carrots, bean sprouts, soy sauce, sesame oil, oyster sauce and garlic. </p>
        <button type="submit" onClick = "postFn(5, 'Lo Mein')"> add to cart </button>
    </div>
</div>`);
}else if (urlParams.myCountry[0] == "Stir Fried Rice") {
    $('#searchRoot').append(`<div class="single-menu">
    <img src="https://lh3.googleusercontent.com/pw/ACtC-3eGPYp2L0LmdRTWXeD53iMRWnnqo0WwmG5xOvinz7VbRqaeWoLSzXPVQPO494o4Qjmis9gdtEerbXNDAFutNJ1jI_2rP5LRn0Zr0WbV0h9cKv32SOLwgMFlRRSe6MzKjuKIhbJVmSwBdcgL5XekpASS=w224-h217-no?authuser=0" alt="Item5" width="200" height="40">
    <div class="menu-content">
        <h4>Stir Fried Rice <span>$5</span> </h4>
        <p> White rice stir fried with eggs, snow peas, carrots, soy sauce and sesame oil. </p>
        <button type="submit" onClick = "postFn(5, 'Fried Rice')"> add to cart </button>
    </div>
</div>`);
}else if (urlParams.myCountry[0] == "Egg Rolls") {
    $('#searchRoot').append(`<div class="single-menu">
    <img src="https://lh3.googleusercontent.com/pw/ACtC-3eegVy1vA_TY6B9u-K96pddMGMg34rCYCahpIIzvgut1Ert5oSEZ5znrVmQx-1O6ixTFlDwbsVn_Ehy9CNQ3s_mMEelhc_bjTtgCHw-P55kJU9gmVgoeLsP2qmxpBNbcrsrrxz-ZPXjknOPaiPQjWWk=w465-h423-no?authuser=0" alt="Item6" width="200" height="40">
    <div class="menu-content">
        <h4>Egg Rolls <span>$3</span> </h4>
        <p> Deep fried egg rolls with flour wrapping and an inner filler of chopped cabbage, pork, shiitake mushrooms and other ingredients. </p>
        <button type="submit" onClick = "postFn(3, 'Egg Roll')"> add to cart </button>
    </div>
</div>`);
}


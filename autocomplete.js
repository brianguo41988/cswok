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
console.log(urlParams.myCountry)

if (urlParams.myCountry === "chicken and Broccoli") {
    $('#searchRoot').append(`<div class="single-menu">
    <img src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" alt="Item1" width="200" height="40">
    <div class="menu-content">
        <h4>Chicken and Broccoli <span>$9</span> </h4>
        <p> Sliced chicken breast cooked with broccoli, soy sauce, honey, hoisin sauce and other ingredients. </p>
        <button type="submit" onClick = "postFn(9, 'Chicken Broccoli')"> add to cart </button>
    </div>
</div>`)
}


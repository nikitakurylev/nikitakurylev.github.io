(function () {
    console.log("a")
    timeStart = Date.now()
    window.addEventListener('load', (event) => {
        document.getElementById("footer").innerHTML += " - page loaded in " + (Date.now() - timeStart) + " ms";
        document.getElementById(document.location.pathname).className = "current"
    });
})();

(function () {
    timeStart = Date.now()
    window.addEventListener('load', (event) => {
        document.getElementById(document.location.pathname).className = "current"
    });
})();

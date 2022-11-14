function onSubmit(form) {
    if(form.text.value == "")
        return;
    var s = localStorage.getItem('list');
    if(s == null)
        s = "";
    s += "<li class='todo'>" + form.text.value + "</li>";
    localStorage.setItem('list', s);
    document.getElementById("list").innerHTML = s;
}

function onClear() {
    localStorage.removeItem('list');
    document.getElementById("list").innerHTML = "";
}

window.addEventListener('load', (event) => {
    document.getElementById("list").innerHTML = localStorage.getItem('list');
});
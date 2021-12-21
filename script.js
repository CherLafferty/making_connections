console.log("page uploaded");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var user_name = document.querySelector("#user_name");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    user_name.innerText = "Cher Lafferty";
}
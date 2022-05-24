//const res = require("express/lib/response");

const http = new coreHTTP;

// Setup Selectors
const result = document.querySelector(".result");
const input = document.querySelector(".form-input");
const formAlert = document.querySelector(".form-alert");
const addButton = document.querySelector(".add-btn");
const delButton = document.querySelector(".del-btn");

// Add Event Listeners
addButton.addEventListener("click",httpPost);
delButton.addEventListener("click",httpDelete);

function ShowList(listdata){
    let output = "<ul>";
    for (const itm of listdata){
        output += `<li> ${itm} </li>`;
    }
    output += "</ul>";
    result.innerHTML = output;

}

function httpGet(){
    console.log("Get");
    http.get("/api")
    .then((listdata) => {
        ShowList(listdata);
        return;
    })
    .catch((err)=>{
        let output = `<p> Error: ${err} </p>`;
        result.innerHTML = output;
    })
}

function httpPost(){
    console.log("Post");
}

function httpDelete(){
    console.log("Delete");
}

httpGet();
const http = new coreHTTP;

// Block Variable
let listRetrieved = false;
let theList = [];

// setup selectors
const result = document.querySelector(".result");
const input =  document.querySelector("#listitem");
const formAlert =  document.querySelector(".form-alert");
const addButton =  document.querySelector(".add-btn");
const delButton =  document.querySelector(".del-btn");

// Listeners
addButton.addEventListener("click", httpPost);
delButton.addEventListener("click", httpDelete);

/* Helper Functions */
function ShowList() {
  let output = "<ul>";
  for (const itm of theList) {
    output += `<li>${itm}</li>`;
  }
  output += "</ul>";
  result.innerHTML = output;
}

async function GetList() {
  const listData = await http.get("/api");
  theList = listData;
  ShowList();
  return; 
}

async function WriteList() {
  await http.post("./api",theList);
  ShowList();
}

/* Listener Functions */
async function httpPost(e) {
  const newItem = input.value;
  if (newItem === ""){
    return;
  }
  theList.push(newItem);
  WriteList();
  e.preventDefault();
}

function httpDelete(e) {
  const newItem = input.value;
  if (newItem === ""){
    return;
  }
  const idx = theList.indexOf(newItem);
  if (idx === -1){
    return;
  }
  theList.splice(idx,1);
  WriteList();
  e.preventDefault();
}

// Loading functions
function showLoading() {
  result.innerHTML = "Loading...";
}

async function main() {
  addButton.disabled = true;
  delButton.disabled = true;
  showLoading();

  await GetList();

  addButton.disabled = false;
  delButton.disabled = false;
}

main();
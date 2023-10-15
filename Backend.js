/* const search = document.querySelector('form');
search.addEventListener('submit', (sub) => {
    sub.preventDefault();
    const fd = new FormData(search);
    const obj = Object.fromEntries(fd);
    console.log(obj);
    const json = JSON.stringify(obj);
    console.log(json);
})
*/
/*
fetch ('https://date.nager.at/api/v3/PublicHolidays/2023/DE')
.then(res => {
  return res.json(); 
})
.then(daten => {
   daten.forEach(tag => {
       const listitem = `<li> ${tag.date} ${tag.localName} </li>`;
       document.querySelector('ul').insertAdjacentHTML("beforeend",listitem);
   }); 
}); 

*/

const search = document.getElementById("search");
const conlist = document.getElementById("container-list");
// var zahl = "eins";

function counter() {
    zahl = "oft";
    localStorage.setItem("besuch",zahl);
}

function addTask() {
    if (search.value === "") {
        alert ("Das Eingabefeld ist leer")
    } else {
        let li = document.createElement("li");
        li.innerHTML = search.value;
        conlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    search.value = " ";
    saveData();
}

function saveData() {
    localStorage.setItem("data", conlist.innerHTML);
}

function showData() {
    conlist.innerHTML = localStorage.getItem("data");
}

conlist.addEventListener("click", function(a) {
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("Auswahl");  
        saveData();
    } else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
        saveData();
    }
}, false);


function init() {
    init = empty();
    fetch ('https://date.nager.at/api/v3/PublicHolidays/2023/DE')
    .then(res => {
    return res.json(); 
    })
    .then(daten => {
    daten.forEach(tag => {
       const listitem = `${tag.date} ${tag.localName}`;
       let li = document.createElement("li");
        li.innerHTML = listitem;
        conlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }); 
    }); 
}


function empty() {
}

//localStorage.setItem("besuch", zahl);
//console.log(localStorage.getItem("besuch"));
//counter();
  
init();
//console.log(localStorage.getItem("besuch"));
//console.log(zahl);
//} else {
showData();
//console.log("showData");
//}


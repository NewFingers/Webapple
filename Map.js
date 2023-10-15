const search = document.getElementById("search");
const conlist = document.getElementById("container-list");
const apiend = "https://date.nager.at/api/v3/PublicHolidays/2023/DE";
const quer = document.querySelector("container-list");

const getData = async () => {
    const res = await fetch(apiend);
    const data = await res.json();
    return data;
} 

const displayData = async () => {
    const payload = await getData();

    let dataDisplay = payload.map((object) => {
        const { date, localName } = object;

        

    }).join("");

    conlist.innerHTML = dataDisplay;
    saveData();
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



displayData();
showData();
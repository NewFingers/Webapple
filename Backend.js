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



const search = document.getElementById("search");
const conlist = document.getElementById("container-list");

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

}
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

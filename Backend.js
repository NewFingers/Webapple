const search = document.querySelector('form');
search.addEventListener('submit', (sub) => {
    sub.preventDefault();
    const fd = new FormData(search);
    const obj = Object.fromEntries(fd);
    console.log(obj);
    const json = JSON.stringify(obj);
    
    console.log(json);
})

fetch ('https://date.nager.at/api/v3/PublicHolidays/2023/DE')
.then(res => {
  return res.json(); 
})
.then(daten => {
   daten.forEach(tag => {
       const listitem = `<li> ${tag.date} ${tag.localName} </li>`
       document.querySelector('ul').insertAdjacentHTML("beforeend",listitem);
   }); 
}); 



const bottom = document.querySelector('.bottom');
const search = document.getElementById('search');

getData()

search.addEventListener('input', (e) => {
    fileEntry(e.target.value)
}
);

let listItem = [];

async function getData() {
 const res =  await fetch('https://randomuser.me/api?results=50'); 
 const {results} = await res.json();
 console.log(results)
 bottom.innerHTML = ''

  results.forEach((user) => {
    const li = document.createElement('li');

    listItem.push(li);

li.innerHTML = `
      <img src="${user.picture.medium}" alt=""/>
     <div class="info">
        <h3>${user.name.first} ${user.name.last} </h3>
        <p>${user.location.city} ${user.location.country}</p>
     </div>
    `
   bottom.appendChild(li)
  })

}

const fileEntry = (searchItem) => {
   // console.log(searchItem)
        listItem.forEach((item)=> {
     
            if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
                item.classList.remove('hide');
            }
     else {
        item.classList.add('hide');
     }
        })

}
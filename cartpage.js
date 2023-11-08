fetch('http://localhost:3000/trips/totalCart')
.then(response => response.json())
.then(data => {


for (let i = 0; i<data.length; i++ ){
document.querySelector('#Achats').innerHTML += `


<p> ${data[i].trajet}</p>
<p>${data[i].date}</p>
<p>${data[i].price}</p>
<button id="deleteCart" type="button">X</button>




`

}



})
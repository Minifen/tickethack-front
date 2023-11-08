fetch('http://localhost:3000/trips/totalCart')
.then(response => response.json())
.then(data => {


for (let i = 0; i<data.length; i++ ){
document.querySelector('#Achats').innerHTML += `
<div class='supr'>
    <p>${data[i].trajet}</p>
    <p class="p1">${data[i].date}</p>
    <p class="p2">${data[i].price}</p>
    <button class="deleteCart" type="button">X</button>
    </div>
`
}
const allDelete= document.querySelectorAll('.deleteCart')

    for (let i=0; i < allDelete.length; i++) {
    allDelete[i].addEventListener ('click', function() {
    console.log(this.previousElementSibling.previousElementSibling.textContent)
        const deleteCart = {
        trajet:this.previousElementSibling.previousElementSibling.previousElementSibling.textContent,
        date:this.previousElementSibling.previousElementSibling.textContent,
        price:this.previousElementSibling.textContent,
    }
        fetch('http://localhost:3000/trips/deletetrip', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deleteCart)
        })
    })
}
})
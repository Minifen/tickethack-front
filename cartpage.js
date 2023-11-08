fetch('http://localhost:3000/trips/totalCart')
.then(response => response.json())
.then(data => {


for (let i = 0; i<data.length; i++ ){
document.querySelector('#Achats').innerHTML += `
<<<<<<< HEAD
<div class='supr'>
    <p>${data[i].trajet}</p>
=======
    <p class="p0">${data[i].trajet}</p>
>>>>>>> 79634878464427180d67a230d821d0b41f6d53a6
    <p class="p1">${data[i].date}</p>
    <p class="p2">${data[i].price}</p>
    <button class="deleteCart" type="button">X</button>
    </div>
`
}
<<<<<<< HEAD
=======
})

>>>>>>> 79634878464427180d67a230d821d0b41f6d53a6
const allDelete= document.querySelectorAll('.deleteCart')

    for (let i=0; i < allDelete.length; i++) {
    allDelete[i].addEventListener ('click', function() {
    console.log(this.previousElementSibling.previousElementSibling.textContent)
        const deleteCart = {
<<<<<<< HEAD
        trajet:this.previousElementSibling.previousElementSibling.previousElementSibling.textContent,
        date:this.previousElementSibling.previousElementSibling.textContent,
        price:this.previousElementSibling.textContent,
=======
        trajet: document.querySelector('.p0').firstElementChild.textContent,
        date: document.querySelector('.p1').value,
        price: document.querySelector('.p2').textContent,
>>>>>>> 79634878464427180d67a230d821d0b41f6d53a6
    }
        fetch('http://localhost:3000/trips/deletetrip', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deleteCart)
        })
    })
}
})
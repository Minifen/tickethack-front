fetch('http://localhost:3000/trips/totalCart')
.then(response => response.json())
.then(data => {


for (let i = 0; i<data.length; i++ ){
document.querySelector('#Achats').innerHTML += `
    <p class="p0">${data[i].trajet}</p>
    <p class="p1">${data[i].date}</p>
    <p class="p2">${data[i].price}</p>
    <button class="deleteCart" type="button">X</button>
`
}
})

const allDelete= document.querySelectorAll('.deleteCart')

    for (let i=0; i < allDelete.length; i++) {
    allDelete[i].addEventListener ('click', function() {
    
        const deleteCart = {
        trajet: document.querySelector('.p0').firstElementChild.textContent,
        date: document.querySelector('.p1').value,
        price: document.querySelector('.p2').textContent,
    }
        fetch('http://localhost:3000/trips/deletetrip', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deleteCart)
        })
    })
}
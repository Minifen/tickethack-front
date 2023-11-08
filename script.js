
document.querySelector('#btn-search').addEventListener ('click', function() {
    
    const travelSearch = {
        departure: document.querySelector('#departure-btn').value,
        arrival: document.querySelector('#arrival-btn').value,
        date: document.querySelector('#calendar-btn').value,
    }

    fetch('http://localhost:3000/trips/search', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(travelSearch)
    })
    .then(response => response.json())
    .then(data => {
  
    if(data.length>0) {

      document.querySelector('#wrap').remove()

      for (let i=0; i < data.length; i++) {
      
        document.querySelector('#search-right').innerHTML += `

        <div class='voyage'> 
          <p>${data[i].departure} > ${data[i].arrival}  </p>
          <p class="p1">${data[i].date} </p>
          <p class="p2">${data[i].price} €</p>
          <button class="Book" type="button"><a href="cart.html"> Book</a></button>
        </div>
        `
      }

    } else {
      document.querySelector('#search-right').innerHTML =`
      <div id="wrap">
      <img class="notfound" src="images/notfound.png" />
      <hr />
      <p id="parapraghe">No trip found.</p>
      </div>
      `
    }

    const allBooks= document.querySelectorAll('.Book')

    for (let i=0; i < allBooks.length; i++) {
      allBooks[i].addEventListener ('click', function() {
      
        const saveCart = {
          trajet: document.querySelector('.voyage').firstElementChild.textContent,
          date: document.querySelector('.p1').value,
          price: document.querySelector('.p2').textContent,
      }
      fetch('http://localhost:3000/trips/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(saveCart)
      })
  
        })
    }

  })
})




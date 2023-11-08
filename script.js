
document.querySelector('#btn-search').addEventListener ('click', function() {
    
    const travelSearch = {
        departure: document.querySelector('#departure-btn').value,
        arrival: document.querySelector('#arrival-btn').value,
      date : document.querySelector('#calendar-btn').value,
    }

    fetch('http://localhost:3000/trips/search', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(travelSearch)
    })
    .then(response => response.json())
    .then(data => {
  
    if(data) {

     for (let i=0; i < data.length; i++) {
      
        document.querySelector('#search-right').innerHTML = `
        <div class='voyage'> 
          <p> ${data[0].departure} > ${data[0].arrival}  </p>
          <p>${data[0].date} </p>
          <p>${data[0].price}</p>
          <button id="deleteCart" type="button">Book</button>
        </div>
        `
    }
     }
    })
})



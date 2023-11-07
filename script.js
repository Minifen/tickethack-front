
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
    console.log(data);
})

});


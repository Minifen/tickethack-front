document.querySelector('#btn-search').addEventListener ('click', function() {
    
    const travelSearch = {
        departure: 'Paris',
        arrival: 'Lyon',
    }

    fetch('http://localhost:3000/trips/search'), {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(travelSearch)
    }
    .then(response => response.json())
    .then(data => {
    console.log('gagné');
})
});

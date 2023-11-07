<<<<<<< HEAD
document.querySelector('#btn-search').addEventListener('click', function(){
    
    const travelSearch = {
        departure : "Paris" ,
        arrival :" Lyon",
    }

fetch('http://localhost:3000/trips/search',{


    
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(travelSearch)
})
.then(response => response.json())
.then(data => {
console.log(data);
})


});
=======
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
>>>>>>> a893335184bc21788433d820e1f65bfa6a363291

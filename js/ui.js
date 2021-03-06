/**
 * Build the card of a car
 * @param {Car} car 
 */
export let displayCarCard = function(car) {
    let html = `
    <img src="../images/${car.url}" class="card-img-top" alt="...">
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h5 class="card-title">${car.mod}</h5>
            <h5> À partir de <strong>${car.prices[0]}€ </strong></h5> 
        </div>    
            <p class="card-text">${car.desc}</p>
        <div class="container d-flex justify-content-end">
            <a href="/html/cars/${car.id}.html"> <button type="button" class="btn btn-dark"> En savoir plus </button> </a>
        </div>
    </div>
    `
   
    let carCard = document.createElement('div')
    carCard.setAttribute('class', "card shadow car-rent")
    carCard.innerHTML = html
    return carCard
}

/**
 * Display the list of the current cars array
 * @param {*} cars 
 */
export let displayCarsList = function(cars) {
    let car_list = document.querySelector('#car-list')
	while(car_list.firstChild) {
		car_list.removeChild(car_list.firstChild)
	}
	cars.forEach( car => { car_list.appendChild(displayCarCard(car)) });
}

// fonction displayCarDetails (pour la page de détail de chaque véhicule)




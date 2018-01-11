function makeCar() { 

 const makes = ["Opel", "Nissan", "Fiat", "VW", "Ford"]; //arrayz
 const models = ["Tigra", "Punto", "9-11", "Lada", "Mini"];
 const years = [1994, 1999, 1987, 1982, 1990];
 const colors = ["red", "blue", "tan", "yellow", "white"];
 const convertible = [true, false];

 const rand1 = Math.floor(Math.random() * makes.length);
 const rand2 = Math.floor(Math.random() * models.length);
 const rand3 = Math.floor(Math.random() * years.length);
 const rand4 = Math.floor(Math.random() * colors.length);
 const rand5 = Math.floor(Math.random() * 5) + 1;
 const rand6 = Math.floor(Math.random() * 2);

 const car = {

	 make: makes[rand1],
	 model: models[rand2],
	 year: years[rand3],
	 color: colors[rand4],
	 passengers: rand5,
	 convertible: convertible[rand6],
	 mileage: 0

 	};// NB: semi-colon for objekt within the function
 	return car;
 } //end makeCar function

 function displayCar(car) {
 	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
 }

 const carToSell = makeCar();

 displayCar(carToSell);
function makeCar() { //objekt

 var makes = ["Opel", "Nissan", "Fiat", "VW", "Ford"]; //arrayz
 var models = ["Tigra", "Punto", "9-11", "Lada", "Mini"];
 var years = [1994, 1999, 1987, 1982, 1990];
 var colors = ["red", "blue", "tan", "yellow", "white"];
 var convertible = [true, false];

 var rand1 = Math.floor(Math.random() * makes.length);
 var rand2 = Math.floor(Math.random() * models.length);
 var rand3 = Math.floor(Math.random() * years.length);
 var rand4 = Math.floor(Math.random() * colors.length);
 var rand5 = Math.floor(Math.random() * 5) + 1;
 var rand6 = Math.floor(Math.random() * 2);

 var car = {

	 make: makes[rand1],
	 model: models[rand2],
	 year: years[rand3],
	 color: colors[rand4],
	 passengers: rand5,
	 convertible: convertible[rand6],
	 mileage: 0

 	};// NB: semi-colon for objekt within objekt
 	return car;
 } //end makeCar function

 function displayCar(car) {
 	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
 }

 var carToSell = makeCar();

 displayCar(carToSell);
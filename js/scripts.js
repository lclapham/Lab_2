let miles = window.prompt("Enter miles driven");
miles = parseFloat(miles);

let gallons = window.prompt("Enter gallons of fuel used");
gallons = parseFloat(gallons); //This allows the value to be decimal

let mpg = miles / gallons;

mpg = parseInt(mpg);

window.console.log("Miles per gallon "+ mpg);



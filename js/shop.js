// Declaring variables
var customerName = document.querySelector("#name")
var numGlazedDonut = document.querySelector("#glazed-donut");
var numCakeDonut = document.querySelector("#cake-donut");
var pickUpTime = document.querySelector("#pickup");
var subTotal = document.querySelector("#sub-total");
var total = document.querySelector("#total");
var priGlazedDonuts;
var priCakeDonuts;
var donutTotal;
var taxedMoney

// Declaring constants
const TAX = 0.1;
const GLAZED_PRICE = 5
const CAKE_PRICE = 4
const BTN = document.querySelector("button");



numGlazedDonut.addEventListener("keyup", ()=> {
    if (numGlazedDonut.value >= 1 && numCakeDonut.value >= 1) {

        priGlazedDonuts = parseInt(numGlazedDonut.value) * GLAZED_PRICE
        priCakeDonuts = parseInt(numCakeDonut.value) * CAKE_PRICE
        donutTotal = priGlazedDonuts + priCakeDonuts
        subTotal.value ="$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX)).toFixed(2)
        total.value = "$" + taxedMoney
         
   }

    else if (numGlazedDonut.value >=1 && numCakeDonut.value == 0) {
        priGlazedDonuts = parseInt(numGlazedDonut.value) * GLAZED_PRICE
        donutTotal = priGlazedDonuts
        subTotal.value = "$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX)).toFixed(2)
        total.value = "$" + taxedMoney
    }

    else if (numGlazedDonut.value == 0 && numCakeDonut.value >=1 ) {
        priCakeDonuts = parseInt(numCakeDonut.value) * CAKE_PRICE
        donutTotal = priCakeDonuts
        subTotal.value = "$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX )).toFixed(2)
        total.value = "$" + taxedMoney
    }

    else {
        subTotal.value = ""
        total.value = ""
    }

})
numCakeDonut.addEventListener("keyup", ()=> {
    if (numCakeDonut.value >= 1 && numGlazedDonut.value >=1) {
        priCakeDonuts = parseInt(numCakeDonut.value) * CAKE_PRICE
        priGlazedDonuts = parseInt(numGlazedDonut.value) * GLAZED_PRICE
        donutTotal = priGlazedDonuts + priCakeDonuts
        subTotal.value ="$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX)).toFixed(2)
        total.value = "$" + taxedMoney
    }

    else if (numCakeDonut.value >=1 && numGlazedDonut.value == 0) {
        priCakeDonuts = parseInt(numCakeDonut.value) * CAKE_PRICE
        donutTotal = priCakeDonuts
        subTotal.value = "$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX)).toFixed(2)
        total.value = "$" + taxedMoney
    }

    else if (numGlazedDonut.value >=1 && numCakeDonut.value == 0 ) {
        priGlazedDonuts = parseInt(numGlazedDonut.value) * GLAZED_PRICE
        donutTotal = priGlazedDonuts
        subTotal.value = "$" + donutTotal
        taxedMoney = (donutTotal + (donutTotal * TAX)).toFixed(2)
        total.value = "$" + taxedMoney
    }

    else {
        subTotal.value = ""
        total.value = ""
    }

})
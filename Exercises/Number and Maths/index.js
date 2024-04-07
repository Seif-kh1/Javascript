/*
    //  2A

    let soup = 10
    let burger = 8
    let icecream = 5
    let result = soup + burger + icecream
    console.log("The cost of the order is: " + result)

    //  2B

    let allpay = result * 3
    let eachpersonsorder = allpay / 3
    console.log("We will Pay: " + allpay, ",Each person will pay: " + eachpersonsorder)

    //  2C

    let toaster = 18.50
    let shirt = 7.50
    let totalcost = toaster + (shirt *2)
    console.log("One Toaster and two shirst cost: " + totalcost)

    //  2D

    let tentaxes = totalcost * 0.10
    let tentaxesandresult = tentaxes + totalcost
    console.log("The 10% Taxes on the last order is: " + tentaxes)
    console.log("The total is now " + tentaxesandresult)

    //  2E

    let twentytaxes = totalcost * 0.20
    let twentytaxesandresult = twentytaxes + totalcost
    console.log("The 20% Taxwes on the last order is: " + twentytaxes)
    console.log("The total is now " + twentytaxesandresult)

    //  2F

    let basketball = 20.95
    let socks = 10.90
    let toaster = 18.99
    let result = basketball + socks + toaster
    console.log("No taxes: " + result)

    //  2i

    let taxes = result * 0.10
    console.log("With taxes: " + (Math.ceil(taxes) + result))

    // 2j

    let number = 2.29
    console.log(Math.floor(number))

*/

// FROM KELVIN TO CELCIUS CALCULATOR

document.addEventListener("DOMContentLoaded" , function () {
    function kelvininput () {
        let kelvinuserinput = document.getElementById("temp-input-K").value;
        let kelvinuseroutput = (kelvinuserinput - 273.15)
        document.getElementById("h1-k").textContent = "Temprature = " + (Math.round(kelvinuseroutput)) + "C";
        console.log("Temp submitted: " + kelvinuserinput)
        console.log("Temp calculated: " + kelvinuseroutput)
    }

    document.getElementById("temp-input-K").addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            kelvininput();
        }
    })

    function celciusinput () {
        let celciususerinput = document.getElementById("temp-input-C").value
        celciususerinput = Number(celciususerinput);
        let celciususeroutput = celciususerinput + 273
        document.getElementById("h1-c").textContent = "Temprature = " + (Math.round(celciususeroutput)) + "K";
        console.log("Temp submitted: " + celciususerinput)
        console.log("Temp calculated: " + celciususeroutput)
    }

    document.getElementById("temp-input-C").addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            celciusinput();
        }
    })
})


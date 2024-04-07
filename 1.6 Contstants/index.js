// const = a variable that can't be changed

const pi = 3.14159


document.addEventListener("DOMContentLoaded", function () {
    function submitradius() {
        let radius = document.getElementById("submit").value;
        let circumfrance;
        radius = Number(radius);
        circumfrance = 2 * pi * radius;
        document.getElementById("result").textContent = "The Circumfrance is: " + circumfrance;
        console.log("The Circumfrance is: " + circumfrance)
    }

    document.getElementById("submit-btn").addEventListener("click", function () {
        submitradius();
    });

    document.getElementById("submit").addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            submitradius();
        }
    })   
});
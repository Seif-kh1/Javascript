// How to accept user input

// 1. EASY WAY == window prompt
// 2. PROFESSIONAL WAY == HTML textbox


document.addEventListener("DOMContentLoaded", function () {
    function submitUsername() {
        let username = document.getElementById("my-text").value;
        document.getElementById("welcome-text").textContent = "Hello " + username;
        console.log("Username submitted: "+ username)
    }

    document.getElementById("submit-btn").addEventListener("click", function () {
        submitUsername();
    });

    document.getElementById("my-text").addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            submitUsername();
        }
    })

    
});


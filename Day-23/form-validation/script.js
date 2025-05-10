document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(e){
        e.preventDefault(); 
        if(username.value === "" || password.value === ""){
            message.textContent = "Both fields are required";
        }else{
            message.textContent = "Login successful";
        }
    })
})
document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // RegEx pattern

        // email pattern
        const emailPattern = /^[a-z0-9._+-]+@[a-z0-9]+\.[a-z]{2,}$/;

        // password pattern
        const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;

        // Validation
        let valid = true; // helper variable;

        if(!emailPattern.test(email)){
            document.getElementById("emailError").textContent = "Invalid email format";
            valid = false;
        }else{
            document.getElementById("emailError").textContent = "";
        }

        if(!passwordPattern.test(password)){
            document.getElementById("passwordError").textContent = "Password must be 6+ characters with letter, numbers or special characters";
            valid = false;
        }else{
            document.getElementById("passwordError").textContent = "";
        }

        if(valid){
            console.log({email, password});
            document.getElementById("loginOutput").textContent = `Logged in as ${email}`;
            form.reset();
        }

    })
})
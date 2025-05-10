document.addEventListener("DOMContentLoaded", function(){
    const passwordInput = document.getElementById("password");
    const checkBox = document.getElementById("toggler");

    checkBox.addEventListener("change", function(){
            if(checkBox.checked){
                passwordInput.type = "text";
            }else {
                passwordInput.type = "password";
            }
    })
})
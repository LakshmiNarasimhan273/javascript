document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const cardnumber = document.getElementById("cardnumber").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const expirydate = document.getElementById("expirydate").value.trim();

        // patterns
        const cardPattern = /^\d{16}$/;
        const cvvPattern = /^\d{3}$/;
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

        let valid = true;

        if(!cardPattern.test(cardnumber)){
            document.getElementById("cardError").textContent = "Card number must be 16 digits";
            valid = false;
        } else {
            document.getElementById("cardError").textContent = "";
        }

        if(!cvvPattern.test(cvv)){
            document.getElementById("cvvError").textContent = "CVV must be 3 digits";
            valid = false;
        }else{
            document.getElementById("cvvError").textContent = "";
        }

        if(!expiryPattern.test(expirydate)){
            document.getElementById("expiryError").textContent = "Enter valid expiry date";
            valid = false;
        } else {
            document.getElementById("expiryError").textContent = "";
        }

        if(valid){
            document.getElementById("paymentSuccess").textContent = "Payment successful!";
            form.reset();
        }
    })
})
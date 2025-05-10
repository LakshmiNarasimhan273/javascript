// Step-1 DOMContentLoaded event implemented - Once the html content is loaded
// in the DOM then only our javascript events will be executed in the browser
document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("changeTitle");
    const title = document.getElementById("title");

    // Step-2 Implementing a click event to button
    button.addEventListener("click", function(){
        // Step-3 update the html content using textContent
        title.textContent = "MERN stack Development";
    })
});
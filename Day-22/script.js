function changeTitle(){
    // getElementById
    // Step-1 DOM Syntax
    const heading = document.getElementById("title");
    heading.innerText = "Welcome to Javascript";
    heading.style.color = "red";
}

function changeText(){
    // getElementByClassName
    const paragraph = document.getElementsByClassName("text");
    console.log(paragraph.length);
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].style.color = "green";
        paragraph[i].style.fontWeight = "bold";
        paragraph[i].style.backgroundColor = "black";
        // camelCase 
    }
}

function createBox(){
    // querySelector
    const box = document.querySelector(".box");
    box.style.border = "2px solid black";
}

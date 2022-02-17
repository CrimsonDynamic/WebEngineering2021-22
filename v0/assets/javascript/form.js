
let buttonText = document.querySelector("#Text");
let buttonVideo = document.querySelector("#Video");
let textfield = document.createElement("input");
textfield.setAttribute("type", "text");
let textarea = document.getElementById("textarea");
textarea.replaceWith(textfield);

buttonText.addEventListener("click", function(){
    textarea.replaceWith(textfield);
    //document.getElementById("Text").after(textfield);
});

buttonVideo.addEventListener("click", function(){
    textfield.replaceWith(textarea);
    //document.getElementById("Text").after(textfield);
});




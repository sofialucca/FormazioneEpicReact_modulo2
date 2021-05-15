use strict;

function traslare(idSpostamento){
    // let elSpostare = document.getElementsByClassName(idSpostamento);
    // elSpostare1 = document.getElementById(idSpostamento);
    // elSpostare1.style.transform="translateX(-100%)"
    // elSpostare1.style.translation="transform, 400ms, linear";
    elSpostare = document.querySelectorAll("idSpostamento");
    console.log(elSpostare);
    elSpostare.forEach(element => {
        element.style.transform = "translateX(-100%)";
        element.style.trasition =  "transform, 400ms, linear";
    });
    // elSpostare.style.
    // elSpostare.style.translation=
}
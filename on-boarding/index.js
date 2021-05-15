use strict;

var nClick=0;
function traslare(idSpostamento1, idSpostamento2, idStepper, idContButton, idButton){
    if(nClick<=2){
        let elSpostare1 = document.querySelectorAll(idSpostamento1);
        nClick+=1;
        let transform = `translateX(-${nClick*100}%)`
        elSpostare1.forEach(element => {
            element.style.transform = transform;

        });

        let elSpostare2 = document.querySelectorAll(idSpostamento2);
        elSpostare2.forEach(element => {
            element.style.transform =transform;
        });
        

        if(nClick>2){
            elSpostare1[nClick].style.marginTop = "5%";
            let elSpostare3 = document.querySelector(idStepper)
            elSpostare3.style.transform =transform;
            let bottone = document.querySelector(idContButton);
            bottone.style.transform = transform;

        }else{
            let elSpostare3 = document.querySelectorAll("span");
            elSpostare3.forEach(element =>{
                element.style.color= '#FFFFFF';
            })

            elSpostare3[nClick].style.color= '#00A09A';

            if(nClick==2){
            cambioBottone("FINE",idButton)
            }
        }

    }
}
function cambioBottone(testo,idButton){
    let bottone = document.querySelector(idButton);
    bottone.value = testo;
}

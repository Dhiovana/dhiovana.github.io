let calculadora = document.querySelector(".calc");


let display = document.querySelector(".calc_display");


calculadora.addEventListener("click", function(event){

    let elementoClicado = event.target

    if(elementoClicado.tagName.toLowerCase() == "button"){

        console.log(`Botão clicado: ${elementoClicado.textContent}`)


        //adicionando valores no display


        /*

        se número:

            valor do display = valor do display + valor da tecla


        */

       display.textContent = display.textContent + elementoClicado.textContent

    }  

})
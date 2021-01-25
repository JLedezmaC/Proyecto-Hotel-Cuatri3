//
// JS2 Project template.
//

// Manejador de eventos para los enlaces.
function clickHandler(event) {
    // Cancela el comportamiento default del enlace.
    event.preventDefault();
    // Obtiene el id del elemento que se mostrará.
    // Se usa el método substring(1) para eliminar el primer caracter ('#').
    const id = event.currentTarget.getAttribute('href').substring(1);
    // Llama a la función updateVisibleContent() para actualizar el componente.
    updateVisibleContent(id);
}

  // Oculta todos los ítems excepto el que tiene el id que se pasa como argumento.
function updateVisibleContent(id) {
    // Actualiza los divs de contenido.
    for (let i = 0; i < content.length; i++) {
        content[i].classList.add('js-content-hidden');
        if (content[i].getAttribute('id') === id) {
        content[i].classList.remove('js-content-hidden');
        }
    }
    // Actualiza los enlaces, para mostrar como resaltado el que está seleccionado.
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].classList.remove('js-active');
        if (enlaces[i].getAttribute('href').substring(1) === id) {
        enlaces[i].classList.add('js-active');
        }
    }
}

  // Obtiene los enlaces.
const enlaces = document.querySelectorAll('.tabs-tablist-item');
  // Obtiene los divs de contenido.
const content = document.querySelectorAll('.tabs-content-item');

  // Itera sobre los enlaces, registrando el manejador de los eventos click.
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', clickHandler);
}

  // Oculta todos los elementos, excepto el primero.
  // Se usa el método substring(1) para eliminar el primer caracter ('#').
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));

//Variables que obtinenen los enlaces de miniaturas y el div contenedor con la imagen en grande
const links = document.querySelectorAll('.miniature');
const bigImage = document.getElementById('bigImage');

//Funcion principal de la Galeria
for (let i = 0; i < links.length; i++){ 
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        //De esta forma se abstrae la ubicacion de una imagen y se modifica en el div grande (src)
        let url = event.currentTarget.getAttribute('src');
        bigImage.src = `${url}`;

        //De esta forma se aplica un estilo para cada miniatura en donde se da click
        for(let i = 0 ; i < links.length; i++){
            links[i].classList.add('img-content-hidden');
            if (links[i].getAttribute('src') == url){   
                links[i].classList.remove('img-content-hidden');
            }
        }
        for(let i = 0; i < bigImage.length; i++){
            bigImage[i].classList.remove('img-active');
        }
        event.currentTarget.classList.add('img-active');
    });
    
}

'use strict';

// Definizione e assegnazione di un array
const arraySpesa = [
    'Pane',
    'Latte',
    'Formaggio',
    'Carne',
    'Mele',
    'Pere',
    'Pasta',
    'Uova',
    'Merluzzo',
    'Salmone'
]

// Selezione dell'elemento html tramite id
const listaSpesa = document.getElementById('lista-spesa');

// Definizione e assegnazione di una variabile contatore
let i = 0;

// Ciclo che scorre l'array fino alla fine
while(i < arraySpesa.length){

    // Creazione di un elemento 'li' all'interno del DOM
    const elementoSpesa = document.createElement('li');
    listaSpesa.append(elementoSpesa);

    // Inserimento all'interno dell'elemento creato l'i-esimo elemento dell'array
    elementoSpesa.innerText = arraySpesa[i];

    // Incremento del contatore
    i++;
}
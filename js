// 1. Función para filtrar palabras más largas
function bigWords(inputWord, wordsArray) {
    return wordsArray.filter(word => word.length > inputWord.length);
}

// 2. Función para imprimir el array en el DOM
function printArray(wordsArray) {
    const ulElement = document.getElementById('wordList');
    ulElement.innerHTML = ''; // Limpiar lista antes de agregar nuevos elementos

    wordsArray.forEach(word => {
        const liElement = document.createElement('li');
        liElement.textContent = word;
        ulElement.appendChild(liElement);
    });
}
const wordsDatabase = [
    'insecto', 'bootcamp', 'mangos', 'reptil', 'mosca',
    'escritorio', 'computadora', 'teclado', 'monitor', 'javascript',
    'html', 'css', 'desarrollador', 'funcion', 'arreglo'
];

document.getElementById('filterButton').addEventListener('click', () => {
    const inputWord = document.getElementById('wordInput').value;
    const filteredWords = bigWords(inputWord, wordsDatabase);
    printArray(filteredWords);
});

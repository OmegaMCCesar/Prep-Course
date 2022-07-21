function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    let arreglo2 = arr.sort((p1, p2) => p1.length - p2.length);
    return arreglo2;
}
console.log(sortArray(["juan", "si", "pedro", "chicharo"]))
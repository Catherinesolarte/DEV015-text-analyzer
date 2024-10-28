// Objeto que contiene métodos para analizar texto y calcular métricas
const analyzer = {
  // Cuenta el número de palabras en el texto dado
  getWordCount: (text) => {
    return text.trim().split(/\s+/).length;
  },

  // Cuenta el número total de caracteres en el texto, incluyendo espacios y signos de puntuación
  getCharacterCount: (text) => {
    return text.length;
  },

  // Cuenta los caracteres excluyendo espacios y signos de puntuación
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s+/g, "").length;
  },

  // Calcula la longitud media de las palabras en el texto
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") return 0;

    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return Number((totalLength / words.length).toFixed(2));
  },

  // Cuenta el número de secuencias numéricas en el texto
  getNumbersCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },

  // Suma todos los números presentes en el texto
  getNumbersSum: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers
      ? numbers.reduce((acc, num) => acc + parseInt(num, 10), 0)
      : 0;
  },
};

export default analyzer;

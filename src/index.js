// Importa el objeto analyzer con los métodos para calcular métricas de texto
import analyzer from "./analyzer.js";
console.log(analyzer);

// Escucha el evento 'input' del textarea para actualizar las métricas en tiempo real
document
  .querySelector('textarea[name="user-input"]')
  .addEventListener("input", (event) => {
    const text = event.target.value;

    // Actualiza las métricas en el DOM usando los métodos de analyzer
    document.querySelector("#word-count").textContent =
      analyzer.getWordCount(text);
    document.querySelector("#character-count").textContent =
      analyzer.getCharacterCount(text);
    document.querySelector("#char-no-space-count").textContent =
      analyzer.getCharacterCountExcludingSpaces(text);
    document.querySelector("#number-count").textContent =
      analyzer.getNumbersCount(text);
    document.querySelector("#number-sum").textContent =
      analyzer.getNumbersSum(text);
    document.querySelector("#avg-word-length").textContent =
      analyzer.getAverageWordLength(text);
  });

// Escucha el evento 'click' del botón de reinicio para limpiar el texto y reiniciar las métricas
document.getElementById("reset-button").addEventListener("click", () => {
  // Limpia el textarea
  document.querySelector('textarea[name="user-input"]').value = "";

  // Reinicia todos los contadores a 0
  document.querySelectorAll("ul li span").forEach((span) => {
    span.textContent = "0";
  });
});

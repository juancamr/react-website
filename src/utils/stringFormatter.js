export function quitarTildes(palabra) {
  const mapaTildes = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };

  return palabra.replace(/[áéíóúÁÉÍÓÚ]/g, (letra) => mapaTildes[letra]);
}

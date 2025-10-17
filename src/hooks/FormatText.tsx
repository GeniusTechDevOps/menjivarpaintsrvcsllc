//metodo para eliminar caracteres especiales y remplazar los espacio con guiones
const FormatText = (text: string) => {
  return text
    .toLowerCase()
    .replaceAll(/[\s'&]+/g, "-") // Reemplaza todos los espacios, comillas simples y '&' por guiones
    .replaceAll(/[^\w-]+/g, "") // Elimina todos los caracteres que no sean palabras o guiones
    .trim()
    .replace(/^-+|-+$/g, ""); // Elimina guiones al inicio o al final del texto
};

export default FormatText;

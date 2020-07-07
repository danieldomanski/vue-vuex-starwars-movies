export const getAllFilms = async () => {
  return await (await fetch("https://swapi.dev/api/films")).json();
};

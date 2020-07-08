export const getAllFilms = async () => {
  return await (await fetch("https://swapi.dev/api/films")).json();
};

export const getFilmById = async (id) => {
  return await (await fetch(`https://swapi.dev/api/films/${id}`)).json();
};

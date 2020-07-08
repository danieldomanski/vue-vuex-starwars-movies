export const getAllFilms = async () => {
  return await (await fetch("https://swapi.dev/api/films")).json();
};

export const getFilmById = async (id) => {
  return await (await fetch(`https://swapi.dev/api/films/${id}`)).json();
};

export const searchFilmsByTitle = async (title) => {
  return await (
    await fetch(`https://swapi.dev/api/films/?search=${title}`)
  ).json();
};

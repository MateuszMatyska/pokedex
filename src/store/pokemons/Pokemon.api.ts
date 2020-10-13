export const getPokemons = (): any => {
  return new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPokemonByUrl = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

 export interface JokeResponse {
  id: string;
  joke: string;
 }

export const fetchJoke = async(): Promise<JokeResponse | null> => {
  return await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then((json: JokeResponse) => {
    if (!json.joke) {
      throw new Error('Failed to fetch joke');
    }
    return json;
  })
  .catch(error => {
    console.error(error);
    return null;
  });
};


// export const fetchJoke = async(): Promise<JokeResponse | null> => {
//   const url = 'https://icanhazdadjoke.com/'

//   try {
//     const data = await fetch(url);
//     const pets = await data.json();
//     return pets
//   } catch(error) {
//     console.log('ugh')
//     return null
//   }
// };
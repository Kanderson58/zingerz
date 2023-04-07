 export interface JokeResponse {
  id: string;
  joke: string;
 }

export const fetchJoke = () => {
  return fetch('https://icanhazdadjoke.com/', {
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
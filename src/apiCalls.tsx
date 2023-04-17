import { IJokeResponse, ISearchResponse } from "./interfaces";

type fetchType = (searchTerm: string, page?: number) => Promise<IJokeResponse | ISearchResponse>

export const fetchJokes: fetchType = (searchTerm, page) => {
  const fetchPath = searchTerm ? `search?term=${searchTerm}&page=${page}` : '';
  return fetch(`https://icanhazdadjoke.com/${fetchPath}`, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      } else {
        return response.json();
      }
    });
}
import { IJokeResponse } from "./interfaces";
import { ISearchResponse } from "./interfaces";

export const fetchJoke = (): Promise<IJokeResponse | null> => {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      }
      else {
        return response.json()
      }
    })
};

export const fetchSearch = (term: string, page: number = 1): Promise<ISearchResponse | null> => {
  return fetch(`https://icanhazdadjoke.com/search?term=${term}&page=${page}`, {
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
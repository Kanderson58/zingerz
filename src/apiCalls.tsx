import { IJokeResponse } from "./interfaces";
import { ISearchResponse } from "./interfaces";

export const fetchJoke = async(): Promise<IJokeResponse | null> => {
  return await fetch('https://icanhazdadjoke.com/', {
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

export const fetchSearch = async(term: string): Promise<ISearchResponse | null> => {
  return await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
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
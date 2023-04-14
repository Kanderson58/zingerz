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

export const fetchSearch = async(term: string, page: number = 1): Promise<ISearchResponse | null> => {
  return await fetch(`https://icanhazdadjoke.com/search?term=${term}&limit=30&page=${page}`, {
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





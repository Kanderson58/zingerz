 export interface JokeResponse {
  id: string;
  joke: string;
 }

export interface SearchResponse {
  "current_page": number,
  "limit": number,
  "next_page": number,
  "previous_page": number,
  "results": Array<JokeResponse>,
  "search_term": string,
  "status": number,
  "total_jokes": number,
  "total_pages": number
}

export const fetchJoke = async(): Promise<JokeResponse | null> => {
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

export const fetchSearch = async(term: string): Promise<SearchResponse | null> => {
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
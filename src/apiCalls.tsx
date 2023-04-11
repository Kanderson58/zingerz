 export interface JokeResponse {
  id: string;
  joke: string;
 }

export interface SearchResponse {
  "current_page": number,
  "limit": number,
  "next_page": number,
  "previous_page": number,
  "results": JokeResponse[],
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

export const fetchSearch = async(term: string): Promise<SearchResponse | null> => {
  return await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to search jokes')
      } else {
        return response.json()
      }
    });
}


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
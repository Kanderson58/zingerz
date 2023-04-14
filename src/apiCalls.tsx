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




// import { useState, useEffect } from 'react';

// function Jokes({ searchTerm }) {
//   const [jokes, setJokes] = useState([]);

//   useEffect(() => {
//     async function fetchJokes() {
//       const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&limit=30&page=1`, {
//         headers: { 'Accept': 'application/json' }
//       });
//       const data = await response.json();

//       // If there are no jokes, set the state to an empty array and return
//       if (data.results.length === 0) {
//         setJokes([]);
//         return;
//       }

//       const allJokes = data.results;
//       const totalPages = data.total_pages;

//       // Retrieve the remaining jokes by looping through the pages
//       for (let page = 2; page <= totalPages; page++) {
//         const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&limit=30&page=${page}`, {
//           headers: { 'Accept': 'application/json' }
//         });
//         const data = await response.json();
//         allJokes.push(...data.results);
//       }

//       // Filter the jokes by the search term
//       const filteredJokes = allJokes.filter(joke => joke.joke.includes(searchTerm));

//       setJokes(filteredJokes);
//     }

//     fetchJokes();
//   }, [searchTerm]);

//   return (
//     <div>
//       <h2>Jokes containing "{searchTerm}":</h2>
//       <ul>
//         {jokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
//       </ul>
//     </div>
//   );
// }
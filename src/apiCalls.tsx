export const fetchJokes = (searchTerm: string, page: number = 1) => {
  const fetchPath = searchTerm ? `search?term=${searchTerm}&page=${page}` : ''
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
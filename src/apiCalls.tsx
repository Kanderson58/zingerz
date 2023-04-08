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






//   try {
// const data = await response.json()
// return data
//   } catch (error) {
//     console.log('garbage')
//     return null
//   }
// }






    
//   const data = await response.json();
//   if(data !== error){
//     return data
//   } else{
//     throw new Error('error')
//   }
//   return data;
// } catch(error){
//   console.log(error)
// }

// };

// .then(response => response.json())
// .then((json: JokeResponse) => {
//   if (!json.joke) {
//     throw new Error('Failed to fetch joke');
//   }
//   return json;
// })
// .catch(error => {
//   console.error(error);
//   return null;
// });
// };
const fetchJoke = () => {
  fetch('https://icanhazdadjoke.com/')
    .then(response => {
      if (!response.ok) {
        // Figure out how TS throws Errors
      }
        // Finish API call
    })
}
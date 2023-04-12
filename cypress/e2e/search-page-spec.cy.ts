/// <reference types="Cypress" />

const sampleJoke3 = {
  "current_page": 1,
  "limit": 20,
  "next_page": 2,
  "previous_page": 1,
  "results": [
    {
      "id": "usrcaMuszd",
      "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon."
    }
  ],
  "search_term": "",
  "status": 200,
  "total_jokes": 307,
  "total_pages": 15
}

describe('Search View', () => {
  beforeEach('', () => {
    console.log('sampleJoke3', sampleJoke3)
    cy.intercept('https://icanhazdadjoke.com/search?term=cat', sampleJoke3)
      .visit('http://localhost:3000/search');
  });

  it('should allow user to click and type in search bar', () => {
    cy.get('input').type('cat').get('.search-btn').click()
    .get('.search-joke').should('be.visible')
  })
})
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
    cy.get('input').type('teachers').get('.search-btn').click()
    .get('.search-joke').should('be.visible')
    .contains('What\'s the worst thing about ancient history class? The teachers tend to Babylon.')
  })
  it('should be able to go back home', () => {
    cy.get('.nav-links > [href="/"]').click()
    cy.get('.main-joke')
  })
})

describe('Sad Path', () => {
  beforeEach('', () => {
    cy.intercept('https://icanhazdadjoke.com/search?term=cat', { 
      statusCode: 404
    })
    .visit('http://localhost:3000/search')
  })
  it.skip('should see 404 error', () => {
    cy.get('input').type('cat').get('.search-btn').click()
    .get('h2').contains('ERROR');
  })
})
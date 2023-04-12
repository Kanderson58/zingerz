/// <reference types="Cypress" />

const sampleJoke3 = 'Put the cat out … I did not realize it was on fire'

describe('Search View', () => {
  beforeEach('', () => {
    cy.intercept('https://icanhazdadjoke.com/search?term=cat', sampleJoke3)
      .visit('http://localhost:3000/search');
  });

  it('should allow user to click and type in search bar', () => {
    cy.get('input').type('cat').get('.search-btn').click()
  })
})
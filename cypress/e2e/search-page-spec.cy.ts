/// <reference types="Cypress" />

describe('search view', () => {
  beforeEach('', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      fixture: 'sampleJoke1.json'
    })
      .visit('http://localhost:3000/zingerz/search');
  });

  it('should allow user to click and type in search bar', () => {
    cy.intercept('https://icanhazdadjoke.com/search?term=cat', {
      fixture: 'sampleJokes3.json'
    });
    cy.get('input').type('teachers').get('.search-btn').click()
      .get('input').should('have.value', 'teachers')
      .get('.search-joke').should('be.visible')
      .contains('What\'s the worst thing about ancient history class? The teachers tend to Babylon.');
  });

  it('should be able to go back home', () => {
    cy.get('.nav-links > [href="/"]').click()
      .get('.main-joke');
  });

  it('should display all jokes if there is more than one page in the API', () => {
    cy.intercept('https://icanhazdadjoke.com/search?term=example&page=1', {
      fixture: 'page1.json'
    })

      .intercept('https://icanhazdadjoke.com/search?term=example&page=2', {
      fixture: 'page2.json'
    })

      .get('input').type('example').get('.search-btn').click()
      .get('input').should('have.value', 'example')
      .get('.all-jokes > :nth-child(9)').contains('Example Page 2');
  });
});

describe('sad paths', () => {
  beforeEach('', () => {
    cy.visit('http://localhost:3000/zingerz/search')
  });

  it('should see 404 error in the case of a bad GET response', () => {
    cy.intercept('https://icanhazdadjoke.com/search?term=cat&page=1', { 
      statusCode: 404
    });

    cy.get('input').type('cat').get('.search-btn').click()
      .get('input').should('have.value', 'cat')
      .get('.error-message').contains('Sorry! Something went wrong. Error: 404');
  });

  it('should display an error message if the user seach has no results', () => {
    cy.get('input').type('badsearchterm').get('.search-btn').click()
      .get('input').should('have.value', 'badsearchterm')
      .get('.no-result-msg').contains('Sorry! No funny business here, try searching again.');
  });
});
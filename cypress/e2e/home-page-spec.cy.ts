/// <reference types="Cypress" />

describe('home page', () => {
  beforeEach('visit homepage', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      fixture: 'sampleJoke1.json'
    })
      .visit('http://localhost:3000');
  });

  it('has a header', () => {
    cy.get('.logo').should('is.visible')
      .get('header').contains('HOME')
      .get('header').contains('SEARCH');
  });

  it('has a homepage with a joke and a joke button', () => {
    cy.get('.main-joke').contains('My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
      .get('.new-joke-btn').contains('Tell Me Another');
  });

  it('gets a new joke when the button is clicked', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      fixture: 'sampleJoke2.json'
    })
      .get('.new-joke-btn').click()
      .get('.main-joke').contains('What did the farmer say when he lost his tractor? Where\'s my tractor?');
  });
});

describe('home page - sad paths', () => {
  it('should show an error message when initial fetch request fails on page load', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      statusCode: 404
    })
      .visit('http://localhost:3000')
      .get('.main-joke').contains('Sorry! Error: 404 humor not found.');
  });

  it('should show an error message when the joke button is clicked and the fetch fails', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      fixture: 'sampleJoke1.json'
    })
      .visit('http://localhost:3000')
      .intercept('https://icanhazdadjoke.com/', {
        statusCode: 404
      })
      .get('.new-joke-btn').click()
      .get('.main-joke').contains('Sorry! Error: 404 humor not found.');
  });
});
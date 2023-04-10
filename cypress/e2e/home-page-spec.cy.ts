/// <reference types="Cypress" />

const sampleJoke1 = {
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
};

const sampleJoke2 = {
  "id": "R7UfaahVfFe",
  "joke": "What did the farmer say when he lost his tractor? Where's my tractor?",
};

describe('home page', () => {
  beforeEach('visit homepage', () => {
    cy.intercept('https://icanhazdadjoke.com/', sampleJoke1)
      .visit('http://localhost:3000');
  });

  // Will need to check for 'HOME' and 'SEARCH''s elements when we decide on which ones to use
  it('has a header', () => {
    cy.get('header').contains('h1', 'ZingerZ')
      .get('header').contains('HOME')
      .get('header').contains('SEARCH');
  });

  it('has a homepage with a joke and a joke button', () => {
    cy.get('.main-joke').contains('My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
      .get('.new-joke-btn').contains('Tell Me Another');
  });

  it('gets a new joke when the button is clicked', () => {
    cy.intercept('https://icanhazdadjoke.com/', sampleJoke2)
      .get('.new-joke-btn').click()
      .get('.main-joke').contains('What did the farmer say when he lost his tractor? Where\'s my tractor?');
  });
});

// Will need to update these tests when we have updated the Error component to use the error state from App.
describe('home page - sad paths', () => {
  it('should show an error message when initial fetch request fails on page load', () => {
    cy.intercept('https://icanhazdadjoke.com/', {
      statusCode: 404
    })
      .visit('http://localhost:3000')
      .get('h2').contains('ERROR');
  });

  it('should show an error message when the joke button is clicked and the fetch fails', () => {
    cy.intercept('https://icanhazdadjoke.com/', sampleJoke1)
    .visit('http://localhost:3000')
    .intercept('https://icanhazdadjoke.com/', {
      statusCode: 404
    })
    .get('.new-joke-btn').click()
    .get('h2').contains('ERROR');
  });
});
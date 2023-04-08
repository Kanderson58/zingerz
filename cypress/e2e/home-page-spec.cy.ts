/// <reference types="Cypress" />
describe('template spec', () => {
  const sampleJoke = {
    "id": "R7UfaahVfFd",
    "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  };

  beforeEach('visit homepage', () => {
    cy.intercept('https://icanhazdadjoke.com/', sampleJoke)
    cy.visit('http://localhost:3000')
  });

  it('passes', () => {

  });
});
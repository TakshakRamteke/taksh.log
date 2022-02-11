import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = 'http://localhost:3000/'

Given('I open {string} page', (uri) => {
  let url = '';
  switch(uri){
    case 'home':
      url = baseUrl
      break

    default:
      url = baseUrl + uri
  }
  cy.visit(url)
})

Then('I see {string} as {string}',(text, location) =>{
  cy.get(location).should('contain',text)
})
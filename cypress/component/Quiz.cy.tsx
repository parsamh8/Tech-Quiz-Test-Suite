import React from 'react'
import Quiz from '../../client/src/components/Quiz'


describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
    cy.get('.card').first().within(() => {
      cy.get('h2').should('have.text', 'Quiz Completed')
    })
  })
})
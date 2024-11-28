import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('should initially render with a maximum of 9 guesses', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz guesses={9}/>)
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 9')
  })

  it('should render with a different number of guesses', () => {
    cy.mount(<Quiz guesses={5}/>)
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 5')
  })

  it('should render a correct guess message', () => {
    cy.mount(<Quiz guesses={5} isCorrect={true} hasGuessed={true}/>)
    cy.get('[data-cy="toast"]').should('exist').and('contain.text', 'Correct!')
  })

  it('should render an incorrect guess message', () => {
    cy.mount(<Quiz guesses={5} isCorrect={false} hasGuessed={true}/>)
    cy.get('[data-cy="toast"]').should('exist').and('contain.text', 'Incorrect!')
  })
})

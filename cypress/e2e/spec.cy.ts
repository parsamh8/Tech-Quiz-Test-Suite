describe('template spec', () => {
  it('connected to local host', () => {
    cy.visit('/')
  })


 
  beforeEach(() => {
    cy.visit('/')
  })

  it('should get first questions', () => {
    cy.intercept('GET', '/api/questions/random', {

      fixture: "mockQuestion"
      
    }).as('getData');
    cy.get('button').click()
    cy.wait('@getData').then((intercept) => {
      assert.isNotNull(intercept.response?.body, '1st API call has data');

      const firstQ = intercept.response?.body[0]
      expect(firstQ).to.have.property('question', 'Do you have any feelings?');
    })
  })

  it('should get the second question', () => {
    cy.intercept('GET', '/api/questions/random', {

      fixture: "mockQuestion"
      
    }).as('getData');
    cy.get('button').click()
    cy.wait('@getData').then((intercept) => {
      assert.isNotNull(intercept.response?.body, '1st API call has data');

      const secondQ = intercept.response?.body[1]
      expect(secondQ).to.have.property('question', 'Do you know Me?');
    })
  })

})


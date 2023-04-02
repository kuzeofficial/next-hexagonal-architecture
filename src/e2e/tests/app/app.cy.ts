describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.findByPlaceholderText('Cristian Fonseca').type('My Name')
    cy.findByPlaceholderText('Image URL').type('https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg')
    cy.findByText('Save').click()
    cy.findByText('My Name').should('be.visible')
  })
})
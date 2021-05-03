describe('Form submit', () => {
  it('no explicit wait, this will fail but shouldn\'t', () => {
   let url = 'http://127.0.0.1:5500/app'
// when
cy.visit(url)


    
   cy.window().then((w) => w.initial = true)
  cy.get('select').select('Second')
  cy.window().its('initial').should('be.undefined')
  cy.get('input').type('Hallo')

  })
})
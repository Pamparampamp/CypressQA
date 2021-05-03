
        describe('My First Test', () => {
    it('Visits homepage successfully!', () => {

       // given
      let url = 'http://127.0.0.1:5500/app'
      // when / then
      cy.visit(url)
    })


      it('Homepage contains the greeting message', () => {
      // given
      let url = 'http://127.0.0.1:5500/app'
      // when
      cy.visit(url)
      // then
      cy.contains('Hello world!')
    })

     it('Enters the name and presses the button, receiving the hello message', () => {
      // given
      let url = 'http://127.0.0.1:5500/app'
      // when
      cy.visit(url)
      cy.get('#name_input').type('Mindaugai')
      cy.get('button').click() 
 
      // then
      cy.contains('Labas Mindaugai!')
      
    })

    it('Enters the name and presses the button, receiving the hello message', () => {
      // given
      let url = 'http://example.cypress.io';
      // when
      cy.visit(url)
 
      // then
      cy.contains('type').click(0)
  
  })

  it("is able to enter form data", () => {
// given
let url = "https://example.cypress.io";
// when
cy.visit(url);
cy.contains('type').click()
// then
cy.url().should('include', '/commands/actions');
cy.get('.action-email')
.type('a@b.com')
.should('have.value', 'a@b.com')
})
   })
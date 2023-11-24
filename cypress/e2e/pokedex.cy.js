describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('check pokemon character - ivysaur is present and can be navigated to', () => {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
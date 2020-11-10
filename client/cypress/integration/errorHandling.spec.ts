/// <reference types="cypress" />

context("Error Handling", () => {
  it("should handle when gene does not exist", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ASDASDE");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 0);
    cy.get('[data-testid="exon"]').should("have.length", 0);
  });

  it("should clear the previous search when gene does not exist", () => {
    cy.reload();
    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ENSG00000133597");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 5);
    cy.get('[data-testid="exon"]').should("have.length", 33);
    cy.get('[data-testid="search-form_input"]').type("ASDASDE");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 0);
    cy.get('[data-testid="exon"]').should("have.length", 0);
  });
});

/// <reference types="cypress" />

context("Error Handling", () => {
  it("should handle and display error message when gene does not exist", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ASDASDE");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 0);
    cy.get('[data-testid="exon"]').should("have.length", 0);
    cy.get('[data-testid="error"]').should(
      "contain",
      "The entered stable id is invalid."
    );
  });

  it("should clear the previous search when gene does not exist", () => {
    cy.reload();
    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ENSG00000133597");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 5);
    cy.get('[data-testid="exon"]').should("have.length", 33);
    cy.get('[data-testid="search-form_input"]').clear().type("ASDASDE");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="transcript"]').should("have.length", 0);
    cy.get('[data-testid="exon"]').should("have.length", 0);

    cy.get('[data-testid="error"]').should(
      "contain",
      "The entered stable id is invalid."
    );
  });
});

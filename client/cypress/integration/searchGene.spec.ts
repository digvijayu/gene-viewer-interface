/// <reference types="cypress" />
context("Search Operation", () => {
  let clear = Cypress.LocalStorage.clear;
  Cypress.LocalStorage.clear = function () {};

  it("search for a gene", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ENSG00000133597");

    cy.get('[data-testid="search-form_button"]').click();

    cy.get('[data-testid="transcript"]').should("have.length", 5);
    cy.get('[data-testid="exon"]').should("have.length", 33);

    cy.should(() => {
      expect(JSON.parse(localStorage.getItem("GENE_STORAGE_KEY"))[0].id).equal(
        "ENSG00000133597"
      );
    });
  });

  it("should remember the last search and show it by default", () => {
    cy.reload();
    cy.get('[data-testid="search-form_input"]').should("have.value", "");
    cy.get('[data-testid="transcript"]').should("have.length", 5);
    cy.get('[data-testid="exon"]').should("have.length", 33);
  });

  Cypress.LocalStorage.clear = clear;
});

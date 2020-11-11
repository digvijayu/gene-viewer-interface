/// <reference types="cypress" />
context("History Board Tests", () => {
  let clear = Cypress.LocalStorage.clear;
  Cypress.LocalStorage.clear = function () {};

  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("search for a gene should be added to the localstorage", () => {
    cy.get('[data-testid="search-form_input"]')
      .should("have.value", "")
      .type("ENSG00000133597");

    cy.get('[data-testid="search-form_button"]').click();

    cy.get('[data-testid="history-item"]').should("have.length", 1);
    cy.get('[data-testid="history-item"]')
      .get('[data-testid="history-id"]')
      .should("contain", "ENSG00000133597");

    cy.get('[data-testid="search-form_input"]').clear().type("ENSG00000271611");

    cy.get('[data-testid="search-form_button"]').click();

    cy.get('[data-testid="history-item"]').should("have.length", 2);
    cy.get('[data-testid="history-item"]')
      .eq(1)
      .get('[data-testid="history-id"]')
      .should("contain", "ENSG00000271611");
  });

  it("should remember only the last 5 searches", () => {
    function triggerSearchFor(id: string) {
      cy.get('[data-testid="search-form_input"]').clear().type(id);
      cy.get('[data-testid="search-form_button"]').click();
      cy.get(
        '[data-testid="history-item"] > [data-testid="history-id"]'
      ).should("contain", id);
    }

    cy.reload();

    triggerSearchFor("ENSG00000133597");
    triggerSearchFor("ENSG00000090266");
    triggerSearchFor("ENSG00000240889");
    triggerSearchFor("ENSG00000157764");
    triggerSearchFor("ENSG00000271932");
    triggerSearchFor("ENSG00000271611");

    cy.get('[data-testid="history-item"] > [data-testid="history-id"]').should(
      "not.contain",
      "ENSG00000133597"
    );
  });

  it("should put previously searched item available in the history only the top", () => {
    function triggerSearchFor(id: string) {
      cy.get('[data-testid="search-form_input"]').clear().type(id);
      cy.get('[data-testid="search-form_button"]').click();
      cy.get(
        '[data-testid="history-item"] > [data-testid="history-id"]'
      ).should("contain", id);
    }

    cy.reload();

    triggerSearchFor("ENSG00000133597");
    triggerSearchFor("ENSG00000090266");
    triggerSearchFor("ENSG00000240889");
    triggerSearchFor("ENSG00000133597");

    cy.get('[data-testid="history-item"] > [data-testid="history-id"]').should(
      "not.contain",
      "ENSG00000133597"
    );
  });

  Cypress.LocalStorage.clear = clear;
});

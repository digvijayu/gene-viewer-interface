/// <reference types="cypress" />
context("Sorting Operation Tests", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should select longest to shortest option by default", () => {
    cy.get('[data-testid="sort-option_longestToShortest"]').should(
      "have.be.checked"
    );
  });

  it("should display longest to shortest option by default after loading data", () => {
    cy.get('[data-testid="sort-option_longestToShortest"]').should(
      "have.be.checked"
    );

    cy.get('[data-testid="search-form_input"]').clear().type("ENSG00000133597");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="history-item"] > [data-testid="history-id"]').should(
      "contain",
      "ENSG00000133597"
    );

    cy.get('[data-testid="transcript"]')
      .eq(0)
      .should("have.attr", "data-id", "ENST00000476491");
    cy.get('[data-testid="transcript"]')
      .eq(1)
      .should("have.attr", "data-id", "ENST00000483369");
    cy.get('[data-testid="transcript"]')
      .eq(2)
      .should("have.attr", "data-id", "ENST00000072869");
    cy.get('[data-testid="transcript"]')
      .eq(3)
      .should("have.attr", "data-id", "ENST00000473512");
    cy.get('[data-testid="transcript"]')
      .eq(4)
      .should("have.attr", "data-id", "ENST00000498423");
  });

  it("should display shortest to longest option by after selecting the option", () => {
    cy.get('[data-testid="search-form_input"]').clear().type("ENSG00000133597");
    cy.get('[data-testid="search-form_button"]').click();
    cy.get('[data-testid="history-item"] > [data-testid="history-id"]').should(
      "contain",
      "ENSG00000133597"
    );

    cy.get('[data-testid="sort-option_shortestToLongest"]').click();

    cy.get('[data-testid="transcript"]')
      .eq(4)
      .should("have.attr", "data-id", "ENST00000476491");
    cy.get('[data-testid="transcript"]')
      .eq(3)
      .should("have.attr", "data-id", "ENST00000483369");
    cy.get('[data-testid="transcript"]')
      .eq(2)
      .should("have.attr", "data-id", "ENST00000072869");
    cy.get('[data-testid="transcript"]')
      .eq(1)
      .should("have.attr", "data-id", "ENST00000473512");
    cy.get('[data-testid="transcript"]')
      .eq(0)
      .should("have.attr", "data-id", "ENST00000498423");
  });
});

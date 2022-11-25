/// <reference types="cypress" />

describe("Neuspesna prijava", () => {

  it("Validacija forme sa pogresnim kredencijalima", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').click().type("false_standard_user");
    cy.get('[data-test="password"]').click().type("false_secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});

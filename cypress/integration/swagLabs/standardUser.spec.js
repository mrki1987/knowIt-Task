/// <reference types="cypress" />

describe("Standard_user korisnik", () => {
  beforeEach(() => {
    cy.visit('/');
    cy.reload();
  })

  it("Uspesna prijava kao standard_user korisnik", () => {
    cy.get('[data-test="username"]').click().type("standard_user").should('have.value', 'standard_user');
    cy.get('[data-test="password"]').click().type("secret_sauce").should('have.value', 'secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('contain', 'inventory.html');
    cy.get('.title').contains('Products').should('be.visible');
  });

  it("Korisnik standard_user dodaje najskuplji predmet i uspešno radi checkout", () => {
    cy.get('[data-test="username"]').click().type("standard_user");
    cy.get('[data-test="password"]').click().type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('select').select('hilo');
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('#shopping_cart_container').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('firstName');
    cy.get('[data-test="lastName"]').type('lastName');
    cy.get('[data-test="postalCode"]').type('11000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.contains('Checkout: Complete!').should('be.visible');
    cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER').should('be.visible');
  });

  it("Korisnik standard_user dodaje najjeftiniji predmet i uspešno radi checkout", () => {
    cy.get('[data-test="username"]').click().type("standard_user");
    cy.get('[data-test="password"]').click().type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('select').select('lohi');
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('#shopping_cart_container').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('firstName');
    cy.get('[data-test="lastName"]').type('lastName');
    cy.get('[data-test="postalCode"]').type('11000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.contains('Checkout: Complete!').should('be.visible');
    cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER').should('be.visible');
  });

  it("Uspesna odjava kao standard_user korisnik", () => {
    cy.get('[data-test="username"]').click().type("standard_user").should('have.value', 'standard_user');
    cy.get('[data-test="password"]').click().type("secret_sauce").should('have.value', 'secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.wait(2000);
    cy.get('#logout_sidebar_link').click({ force: true });
    cy.url().should('be.equal', 'https://www.saucedemo.com/')
  });
});

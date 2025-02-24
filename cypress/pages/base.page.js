/// <reference types="cypress" />

export default class BasePage {
  visit(route) {
    const BASE_URL = {
      DASHBOARD: Cypress.env("baseUrl"),
    };

    cy.viewport("macbook-13");
    cy.visit(BASE_URL.DASHBOARD + route);
  }
}

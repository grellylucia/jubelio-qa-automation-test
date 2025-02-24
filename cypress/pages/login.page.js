import { ROUTES } from "../support/consts/routes";
import BasePage from "./base.page";

class LoginPage extends BasePage {
  get emailField() {
    return cy.get("#textfield-email");
  }

  get passwordField() {
    return cy.get("#textfield-password");
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  login(email, password) {
    this.visit(ROUTES.login);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
    cy.url({ timeout: 10000 }).should("not.include", ROUTES.login);
  }
}

export default new LoginPage();

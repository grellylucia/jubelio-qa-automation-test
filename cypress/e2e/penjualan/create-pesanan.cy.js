import { orderData } from "../../data/order.data";
import loginPage from "../../pages/login.page";
import orderPage from "../../pages/sales/order.page";

describe("Create Pesanan", () => {
  before(() => {
    const email = Cypress.env("email");
    const password = Cypress.env("password");

    loginPage.login(email, password);
  });

  it("Successfully create a new order with valid data ", () => {
    orderPage.visitOrderPage();
    orderPage.addNewOrder();
    orderPage.fillOrderDetails(orderData);
    orderPage.verifySuccessCreateOrder(orderData);
  });
});

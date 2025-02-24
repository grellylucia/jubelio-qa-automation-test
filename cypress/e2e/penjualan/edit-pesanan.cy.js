import { updateOrder } from "../../data/order.data";
import loginPage from "../../pages/login.page";
import orderFormPage from "../../pages/sales/order-form.page";
import orderPage from "../../pages/sales/order.page";

describe("Edit Pesanan", () => {
  before(() => {
    const email = Cypress.env("email");
    const password = Cypress.env("password");

    loginPage.login(email, password);
  });

  it("Successfully create a new order with valid data ", () => {
    orderPage.visitOrderPage();
    orderPage.editOrder("SO-000000003");
    orderFormPage.selectPelanggan(updateOrder.pelanggan);
    orderFormPage.inputNoRef(updateOrder.no_ref);
    orderFormPage.selectSumber(updateOrder.sumber);
    orderPage.submitForm();
  });
});

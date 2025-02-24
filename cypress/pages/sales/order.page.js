import navigationPage from "../navigation.page";
import orderFormPage from "./order-form.page";

class OrderPage {
  get addNewButton() {
    return cy.get('button[title="Add"]');
  }

  get expandStepButton() {
    return cy.get('[data-testid="ChevronRightIcon"]').should("be.visible");
  }

  visitOrderPage() {
    navigationPage.menuPenjualan.click();
    navigationPage.menuTransaksiPenjualan.click();
    this.expandStepButton.click();
    this.viewTabSemua();
  }

  addNewOrder() {
    this.addNewButton.click();
  }

  editOrder(orderNumber) {
    cy.contains("span", orderNumber).click();
    cy.get('button[title="edit"]').click();
  }

  viewTabSemua() {
    cy.get('button[role="tab"]').contains("Semua").click();
  }

  fillOrderDetails(data) {
    orderFormPage.inputNoPesanan(true);
    orderFormPage.selectPelanggan(data.pelanggan);
    orderFormPage.inputNoRef(data.no_ref);
    orderFormPage.selectSumber(data.sumber);
    orderFormPage.selectLokasi(data.lokasi);
    orderFormPage.inputKeterangan(data.keterangan);
    orderFormPage.addProduct(data.products);
    orderFormPage.inputAlamatPenerima(data.address);
    orderFormPage.inputNoTeleponPenerima(data.telepon);
    orderFormPage.switchCodToggle();
    orderFormPage.weightField.should("be.disabled");
    orderFormPage.selectCourier();
    this.submitForm();
  }

  submitForm() {
    cy.get('button[title="save"]').scrollIntoView().click();
  }

  verifySuccessCreateOrder(data) {
    this.viewTabSemua();
    cy.get("tbody tr:first-child td span.font-weight-lightbold").click();
    cy.contains(data.pelanggan).should("exist");
    cy.contains(data.no_ref).should("exist");
  }
}

export default new OrderPage();

import { noPesanan } from "../../helpers/faker";
import BasePage from "../base.page";

class CreateOrderPage extends BasePage {
  get noPesananField() {
    return cy.get('input[name="salesorder_no"]');
  }

  get customerField() {
    return cy.get('input[placeholder="Pilih pelanggan"]');
  }

  get noRefField() {
    return cy.get('input[name="ref_no"]');
  }

  get salesmanField() {
    return cy.get('input[placeholder="Pilih salesman"]');
  }

  get dateField() {
    return cy.get("#mui-7");
  }

  get datePicker() {
    return cy.get(
      'button[aria-label="Choose date, selected date is 23 Feb 2025"]'
    );
  }

  get sourceField() {
    return cy.get('input[placeholder="Pilih sumber"]');
  }

  get storeField() {
    return cy.get("#mui-72");
  }

  get locationField() {
    return cy.get('input[placeholder="Pilih lokasi"]');
  }

  get dropdownFieldButton() {
    return cy.get(".MuiAutocomplete-popupIndicator");
  }

  get dropdownOption() {
    return (value) => cy.contains(".MuiAutocomplete-option", `${value}`);
  }

  get listBox() {
    return cy.get('ul[role="listbox"] li');
  }

  get noteField() {
    return cy.get('textarea[name="note"]');
  }

  get recipientNameField() {
    return cy.get('input[name="shipping_full_name"]');
  }

  get recipientAddressField() {
    return cy.get("span.text-primary").contains("Masukkan Alamat");
  }

  get addressDetailField() {
    return cy.get('input[placeholder="Cth:  Blok, Unit No, Patokan"]');
  }

  get countryField() {
    return cy.get('input[placeholder="Masukkan negara"]');
  }

  get recipientPhoneField() {
    return cy.get('input[name="shipping_phone"]');
  }

  get saveButton() {
    // return cy.contains("button", "Simpan");
    return cy.get('button[type="submit"]');
  }

  get codToggle() {
    return cy.get('input[name="is_acknowledge"]');
  }

  get trackingNoField() {
    return cy.get('input[name="tracking_no"]');
  }

  get weightField() {
    return cy.get('input[name="total_weight_in_gram"]');
  }

  get jubelioShipmentToggle() {
    return cy.get('input[name="is_jubelio_shipment"]');
  }

  get courierField() {
    return cy.get('input[placeholder="Pilih kurir"]');
  }

  get courierOption() {
    return cy.get(".MuiAutocomplete-popper li");
  }

  inputNoPesanan(isAuto = true) {
    if (!isAuto) {
      this.noPesananField.clear().type(noPesanan());
    }
  }

  selectPelanggan(pelanggan) {
    this.customerField.click();
    this.dropdownOption(pelanggan).click();
  }

  inputNoRef(noRef) {
    this.noRefField.type(noRef);
  }

  selectSalesman() {
    this.salesmanField.click();
    this.dropdownFieldButton.click();
    this.dropdownOption.first().click();
  }

  selectTanggal() {
    this.dateField.click();
    this.datePicker.click();
  }

  selectSumber(sumber) {
    this.sourceField.click();
    this.dropdownOption(sumber).click();
  }

  selectToko() {
    this.storeField.click();
    this.listBox.first().click();
  }

  selectLokasi(lokasi) {
    this.locationField.click();
    this.dropdownOption(lokasi).click();
  }

  inputKeterangan(text) {
    this.noteField.type(text);
  }

  inputNamaPenerima(name) {
    this.recipientNameField.clear().type(name);
  }

  inputAlamatPenerima(address) {
    this.recipientAddressField.click();
    this.addressDetailField.type(address.address_detail);
    this.countryField.type(address.country);
    this.saveButton.click();
  }

  inputNoTeleponPenerima(phone) {
    this.recipientPhoneField.type(phone);
  }

  switchCodToggle() {
    this.codToggle.check({ force: true });
  }

  inputNoResi(trackingNo) {
    this.trackingNoField.type(trackingNo);
  }

  switchJubelioShipmentToggle() {
    this.jubelioShipmentToggle.check({ force: true });
  }

  selectCourier() {
    this.courierField.click();
    this.courierOption.first().click();
  }

  addProduct(products) {
    for (const product of products) {
      cy.contains("button", "Tambah Baru").click();
      cy.contains("div", product.sku).click();
    }
  }
}

export default new CreateOrderPage();

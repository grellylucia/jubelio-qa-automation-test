class Navigation {
  get menuPenjualan() {
    return cy.contains("a", "Penjualan");
  }

  get menuTransaksiPenjualan() {
    return cy
      .get('a[href="/sales/transactions"] .font-weight-bold')
      .contains("Transaksi Penjualan");
  }
}

export default new Navigation();

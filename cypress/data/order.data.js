import { faker } from "@faker-js/faker";

export const orderData = {
  pelanggan: "BUKALAPAK",
  no_ref: "REF-93888",
  sumber: "BUKALAPAK",
  lokasi: "Pusat",
  keterangan: faker.lorem.sentence(),
  nama_penerima: faker.person.fullName(),
  address: {
    address_detail: faker.location.streetAddress(),
    country: "Indonesia",
  },
  telepon: faker.phone.number("+62###########"),
  products: [
    {
      sku: "BK-002",
      qty: 2,
      disc: 10,
    },
    {
      sku: "KNO-001",
      qty: 3,
      disc: 10,
    },
  ],
};

export const updateOrder = {
  pelanggan: "BLIBLI",
  no_ref: "REF-10000",
  sumber: "BLIBLI",
};

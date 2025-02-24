import { faker } from "@faker-js/faker";

export const noPesanan = () => {
  return `ORD-${new Date().getFullYear()}${faker.number.int({
    min: 100000,
    max: 999999,
  })}`;
};

export const noRef = () => {
  return `REF-${faker.number.int({ min: 10000, max: 99999 })}`;
};

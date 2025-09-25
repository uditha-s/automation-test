
import { faker } from "@faker-js/faker";

export function generateUserData() {
  const password = faker.internet.password();
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    region: "Bristol",
    postalCode: faker.location.zipCode("#####"),
    country: "United States",
    username: faker.internet.username(),
    password,
    confirmPassword: password, 
  };
}

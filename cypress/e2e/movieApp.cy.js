const {
  adminEmail,
  adminPassword,
  tomorrow,
  filmSection,
} = require("../fixtures/movieApp.json");
const seats = require("../fixtures/seats.json");

describe("Movie ticket booking app tests", () => {
  it("Should sucessfully login", () => {
    cy.login(adminEmail, adminPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Should not login with empty email", () => {
    cy.login(null, adminPassword);
    cy.get('[name="email"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should booking a movie from the admin panel", () => {
    cy.login(adminEmail, adminPassword);
    cy.contains("Ведьмак").then(($el) => {
      const adminFilm = $el.text();
      cy.visit("/");
      cy.get(tomorrow).click();
      cy.contains(adminFilm).parents(filmSection).contains("17:00").click();
    });
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`,
      ).click();
    });
    cy.contains("Забронировать").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
});

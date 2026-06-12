describe("Movie ticket booking app main page tests", () => {
  it("Should display the main page", () => {
    cy.visit("/");
    cy.contains("Идёмвкино").should("be.visible");
  });
});

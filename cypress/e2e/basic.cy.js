describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("h1").contains("ProGadget");
  });

  it("renders the form", () => {
    cy.get("form").should("be.visible");
  });
});

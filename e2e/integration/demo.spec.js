import { namespace } from "../../src/model";

context("Actions", () => {
  beforeEach(() => {
    cy.visit("e2e/demo.html");
  });
  it("test", () => {
    cy.get("#test").should("be.visible").should('have.class', 'test-class');
    cy.get("#test").should('have.text', 'test cypress');
    cy.get('#test').should(($div) => {
      const text = $div.text()
      expect(text).include(' ')
    })
  });
});

context.skip("Actions", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/#/${namespace}`);
  });
  it("test", () => {
    cy.get("button[type='submit']").should("contain", "搜 索");
    cy.get("button[actionkey='add']").should("contain", "新 增");
    cy.get("button[actionkey='delete']").should("contain", "删 除");
  });
});

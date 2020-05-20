import { namespace } from "../../src/model";

context.skip("Actions", () => {
  beforeEach(() => {
    cy.visit("e2e/demo.html");
  });
  it("test", () => {
    cy.get("#test")
      .should("be.visible")
      .should("have.class", "test-class");
    cy.get("#test").should("have.text", "test cypress");
    cy.get("#test").should(($div) => {
      const text = $div.text();
      expect(text).include(" ");
    });
  });
});

context("Actions", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/#/${namespace}`);
  });
  it("test", () => {
    cy.get("button[type='submit']").should("contain", "搜 索");
    cy.get("button[actionkey='add']").should("contain", "新 增");
    cy.get("button[actionkey='delete']").should("contain", "删 除");
  });

  it("route", () => {
    cy.hash().should("eq", `#/${namespace}`);
    cy.location().should((location) => {
      expect(location.hash).to.eq(`#/${namespace}`);
    });
    cy.get("button[actionkey='add']").click();
    cy.hash().should("eq", `#/${namespace}/add`);
    cy.get("input[name='name']").should("have.value", "");
    cy.get("input[name='name']")
      .type("name")
      .then(() => {
        cy.get("input[name='name']").should("have.value", "name");
      });

    cy.get(".ant-panel-footer button")
      .first()
      .as("submitBtn");
    cy.get(".ant-panel-footer button")
      .last()
      .as("cancelBtn");
    cy.get("@cancelBtn")
      .click()
      .then(() => {
        cy.hash().should("eq", `#/${namespace}`);
      });
  });

  it("btn", () => {
    cy.get("button[actionkey='delete']").should("be.disabled");
    cy.get("input[type='checkbox']")
      .first()
      .click();
    cy.get("button[actionkey='delete']").should("not.be.disabled");
  });
});

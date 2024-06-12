describe("myFirstTestCase", () => {
    it.only("myFirstTest", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.contains(" Login").click();
      cy.contains(" Logout").click();
    });
  });


  
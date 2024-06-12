//  describe("mySecondTestCase", () => {
//     it.only("OrangeHRM", () => {
//       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//       cy.xpath("#username").type("Admin");
//       cy.xpath("#password").type("admin123");
//       cy.contains(" Login").click();
//     //   cy.contains(" Logout").click();
//     });
//   }); 

  describe("mySecondTestCase", () => {
    it.only("OrangeHRM", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.xpath('//input[@name="username"]').type("Admin");
      cy.xpath('//input[@name="password"]').type("admin123");
      cy.contains(" Login").click();
      // cy.contains("Logout").click();
    });
  });
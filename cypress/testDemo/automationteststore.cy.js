describe("myThirdTestCase", () => {
    it.only("automationStore", () => {
      cy.visit("https://automationteststore.com/");
      cy.xpath("(//*[text()='Contact Us'])[2]").click()
      cy.get('#ContactUsFrm_first_name').type("Chethan Pai")
      cy.get('#ContactUsFrm_email').type("chethanpai2003@gmail.com")
      cy.get('#ContactUsFrm_enquiry').type("Test is successfull!")
      cy.wait(4000)
      cy.contains('Submit').click();
      cy.xpath("//*[contains(text(), 'successfully')]").should('have.text', "Your enquiry has been successfully sent to the store owner!")
      cy.log("Test completed and successful!")
    });
  });

// To run on terminal i.e headless
 // npx cypress run

// To run on terminal i.e headed but default on electron browser
// npx cypress run --spec "cypress/testDemo/automationteststore.cy.js" --headed

  // To run on terminal and browser i.e headed
  // npx cypress run --spec "cypress/testDemo/automationteststore.cy.js" --headed --browser chrome
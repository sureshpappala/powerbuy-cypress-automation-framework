///<reference types="cypress"/>
describe("Add multiple items to the cart", () => {
  it("Should be able to visit powerbuy shopping page", () => {
    cy.visit("https://www.powerbuy.co.th/th/");
  })
  it("Should be able to fetch all TV products", () => {
    cy.get("input[class='SearchBox__SearchInput-fXnAxI dQBonK']").clear();
    cy.get("input[class='SearchBox__SearchInput-fXnAxI dQBonK']").type("TV");
    cy.get("button[class='Button__StyledButton-r30g8h-0 hkSiWc SearchBox__SearchIconButton-epzLla fGWHN']").click();
    cy.wait(12000);
  })
  it("Should be able to select filter 44-55 inches TV's from all TV products", () => {
    cy.get('[title="ขนาดห้องที่โดนแสงอาทิตย์ (ตรม.)"] > .CardCollaspe__CardTitle-sc-1jxh92o-1 > .CardCollaspe__Arrow-sc-1jxh92o-7').scrollIntoView().click();
    cy.get('[title="ช่วงขนาดหน้าจอ (นิ้ว)"] > .CardCollaspe__CardAnimation-sc-1jxh92o-2 > .CardCollaspe__CardBody-sc-1jxh92o-3 > .CategoryFilter__TopLine-fyjoll > :nth-child(1) > .bPTHbK > [data-testid=btn-checkbox]').click();
    cy.wait(10000);
  })
  it("Should be able to select a product", () => {
    cy.get('#txt-productName-264098').scrollIntoView();
    cy.get('#txt-productName-264098').click();
  })
  it("Should be able to add the selected product to cart", () => {
    cy.get('#btn-addCart-264098').scrollIntoView();
    cy.get('#btn-addCart-264098').click();
    cy.wait(5000);
  })
  it("Should be able to fetch all TV products", () => {
    cy.get("input[class='SearchBox__SearchInput-fXnAxI dQBonK']").clear();
    cy.get("input[class='SearchBox__SearchInput-fXnAxI dQBonK']").type("TV");
    cy.get("button[class$='fGWHN']").click();
    cy.wait(12000);
  })
  it("Should be able to select filter 32-43 inches TV's from all TV products", () => {
    cy.get('[title="ขนาดห้องที่โดนแสงอาทิตย์ (ตรม.)"] > .CardCollaspe__CardTitle-sc-1jxh92o-1 > .CardCollaspe__Arrow-sc-1jxh92o-7').scrollIntoView();
    cy.get('[title="ช่วงขนาดหน้าจอ (นิ้ว)"] > .CardCollaspe__CardAnimation-sc-1jxh92o-2 > .CardCollaspe__CardBody-sc-1jxh92o-3 > .CategoryFilter__TopLine-fyjoll > :nth-child(2) > .bPTHbK > [data-testid=btn-checkbox]').click();
    cy.wait(10000);
  })
  it("Should be able to select a product", () => {
    cy.get('#txt-productName-264094').scrollIntoView();
    cy.get('#txt-productName-264094').click();
  })
  it("Should be able to add the product to cart", () => {
    cy.get('#btn-addCart-264094').scrollIntoView();
    cy.get('#btn-addCart-264094').click();
  })
  it.skip("Validate added items in the cart", () => {
    cy.wait(4000);
    cy.get('.MainHeader__MiniCartContainer-cOzool > .ixdWC > .Tooltip__StyledWrapper-sc-162uvoc-2 > .Tooltip__InheritBlock-sc-162uvoc-1 > .Padding-sc-10o2jvk-0 > .Row__Wrapper-v6uxgu-0 > .Col__Column-sc-1619uro-0 > #btn-openMiniCart > .Icon-sc-134752z-0').click();
    cy.get("div:nth-of-type(1) > .CartItems__RowItem-gowMeA.Row__Wrapper-v6uxgu-0.jyJghz.kSLyDU .Text-sc-9p67zt-0.bxYiRN > .MultipleLineClamp__ProductCutoffDot-jCGKBO.fMOIos > .Text-sc-9p67zt-0.cYMEhS.js-trackProductClick").should('contain', 'ทีวี HD LED (32", Smart) รุ่น 2T-C32CE1X');
    cy.get("div:nth-of-type(3) > .CartItems__RowItem-gowMeA.Row__Wrapper-v6uxgu-0.jyJghz.kSLyDU .Text-sc-9p67zt-0.bxYiRN > .MultipleLineClamp__ProductCutoffDot-jCGKBO.fMOIos > .Text-sc-9p67zt-0.cYMEhS.js-trackProductClick").should('contain', 'ทีวี UHD LED (55", 4K, Smart) รุ่น 4T-C55CJ2X');
  })
})
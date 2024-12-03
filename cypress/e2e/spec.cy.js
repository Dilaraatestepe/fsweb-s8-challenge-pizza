describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5179");
  });

  it("Ad soyad alanına metin girişi yapılabiliyor", () => {
    const fullName = "Dilara Ates";

    cy.get('textarea[name="fullName"]', { timeout: 4000 })
      .type(fullName)
      .should("have.value", fullName);
  });

  it("Birden fazla malzeme seçilebiliyor", () => {
    const malzemeler = ["pepperoni", "sosis", "domates"];

    malzemeler.forEach((malzeme) => {
      cy.get(`input[name="${malzeme}"]`).check();
    });

    malzemeler.forEach((malzeme) => {
      cy.get(`input[name="${malzeme}"]`).should("be.checked");
    });
  });

  it("Form gönderilebiliyor", () => {
    const fullName = "Dilara Ates";
    const size = "orta";

    cy.get('textarea[name="fullName"]').type(fullName);

    cy.get(`input[name="size"][value="${size}"]`).check();

    const malzemeler = ["pepperoni", "sosis"];
    malzemeler.forEach((malzeme) => {
      cy.get(`input[name="${malzeme}"]`).check();
    });

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
  });
});

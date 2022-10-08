describe("API Store", () => {
  it("Make an order", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/store/order",
      body: {
        id: 5,
        petId: 3,
        quantity: 4,
        shipDate: "2022-10-07T17:46:33.059Z",
        status: "placed",
        complete: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Find order by ID", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/store/order/5",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Delete order by ID", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/store/order/5",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

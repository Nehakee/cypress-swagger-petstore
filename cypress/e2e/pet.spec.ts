/// <reference types="cypress" />

describe("API Pet", () => {
  it("Add new pet to store", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: 5,
        category: {
          id: 2,
          name: "Dog",
        },
        name: "Burger",
        photoUrls: ["photo_url"],
        tags: [
          {
            id: 0,
            name: "dog",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Find pet by status", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Update an existing pet", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: 5,
        category: {
          id: 2,
          name: "Burger",
        },
        name: "Ruby",
        photoUrls: ["photo_url"],
        tags: [
          {
            id: 0,
            name: "dog",
          },
        ],
        status: "sold",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

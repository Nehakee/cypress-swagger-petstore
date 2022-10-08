const mainUser = {
  firstName: "Abel",
  lastName: "Fernandez",
  userName: "Abel1",
  password: "abel1",
  emailAddress: "abelfernandez@gmail.com",
  phoneNumber: "670132456",
};
const secondUser = {
  firstName: "Alexi",
  lastName: "Laiho",
  userName: "Alexi1",
  password: "al1",
  emailAddress: "124124@werwers",
  phoneNumber: "11233",
};

describe("API User", () => {
  it("Create user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: 0,
        username: mainUser.userName,
        firstName: mainUser.firstName,
        lastName: mainUser.lastName,
        email: mainUser.emailAddress,
        password: mainUser.password,
        phone: mainUser.phoneNumber,
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Login user into the system", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?username=Abel1&password=abel1",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Login user into the system with wrong password", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?username=Abel1&password=124123123",
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
    //With invalid password respone code should be 400
  });
  it("Logs out current logged in user session", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Get information abaout user", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Abel1",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Update user", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Abel1",
      body: {
        id: 0,
        username: secondUser.userName,
        firstName: secondUser.firstName,
        lastName: secondUser.lastName,
        email: secondUser.emailAddress,
        password: secondUser.password,
        phone: secondUser.phoneNumber,
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Delete user", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Alexi1",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

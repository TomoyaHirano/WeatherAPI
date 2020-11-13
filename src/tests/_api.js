const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
const app = require("");

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("Pokemon API Server", () => {
  let request;
  // beforeEach(() => {
  //   request = chai.request(server);
  // });

  it("express を使用して RESTful CRUD API をセットアップできる。", (done) => {
    // Setup

    // Exercise
    request.get("/api/pokemon").end(function(err, res) {
      expect(res).to.have.status(200);
      expect(err).to.be.null;
      done();
    });
  });

});

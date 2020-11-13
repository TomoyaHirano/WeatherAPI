/**
 * Disclaimer
 *
 * You will notice these test cases are verbose,
 * and can sometimes be refactored and broken down
 * to smaller functions. However, for the sake of
 * learning, and given the complexity of this sprint,
 * test cases here will be as verbose as possible to
 * give you a clear trail of what these tests are trying
 * to achieve
 */
import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
// import { getDefaultApp } from "../app";
import app from '../Server';
// import app from '@server';

chai.use(chaiHttp);

const expect = chai.expect;

describe("expense manager", () => {

  beforeEach(async () => {
  });

  describe("Auth and user services", () => {
    it("should restrict access by unauthenticated user", async () => {
      const res = await chai.request(app).get(`/weather/api`);
      expect(res).to.have.status(200);
    });

  });
});

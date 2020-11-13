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
import { v4 as uuid4 } from "uuid";
import DatabaseConnectionManager from "../database";
import { getDefaultApp } from "../app";

chai.use(chaiHttp);

const expect = chai.expect;

describe("expense manager", () => {
  const APP_SECRET = "xxxyyyxxxyyy";
  const TEST_USER_ID = "3461cac2-35bd-4d45-a163-f220beb43d76";
  const TEST_ACCOUNT_ID = "655f6179-543f-45e7-a4ae-69bd9f179c52";

  let app: Application;
  let userRepo: Repository<User>;
  let accountRepo: Repository<Account>;
  let transactionRepo: Repository<Transaction>;

  /**
   * Sign in with test user and obtain a JWT token
   * username: tester
   * password: tester
   */
  async function signInAndGetToken(): Promise<string> {
    const signInResponse = await chai.request(app).post("/token").send({ username: "tester", password: "tester" });

    return signInResponse.body.accessToken;
  }

  before(async () => {
    await DatabaseConnectionManager.connect();

    app = getDefaultApp(APP_SECRET).app;
    userRepo = getRepository(User);
  });

  after(async () => {
    await userRepo.delete({ id: Not(IsNull()) });
  });

  beforeEach(async () => {
    /**
     * Restore our test user
     * username: tester
     * password: tester
     */
    let testUser = new User();
    testUser.id = TEST_USER_ID;
    testUser.username = "tester";
    testUser.passwordHash = "$2b$10$g4T0eDtJUoYWkyhNnA9X5OF667.l23GNc9hHro5OCkAFQPJRktf5u";
    testUser = await userRepo.save(testUser);

    /**
     * Advanced Requirements:
     * - Create and use a dedicated test database
     */
  });

  describe("Auth and user services", () => {
    it("should restrict access by unauthenticated user", async () => {
      const res = await chai.request(app).get(`/users/${TEST_USER_ID}`);
      expect(res).to.have.status(401);
    });

  });
});

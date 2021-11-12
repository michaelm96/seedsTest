const app = require("../index");
const request = require("supertest");

describe("api test", () => {
  test("get home success", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        const { status } = response;
        expect(status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      })
  });
  
  test("get search success", (done) => {
    request(app)
      .get("/search")
      .query({ title: "Superman" })
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "Success retrieve data")
        expect(status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("get detail success", (done) => {
    request(app)
      .get("/detail")
      .query({ title: "Superman" })
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "Success retrieve detail")
        expect(status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("get search failed", (done) => {
    request(app)
      .get("/search")
      .query({ title: "nvjdnienosjdnvos" })
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "Movie not found!")
        expect(body).toHaveProperty("response", [])
        expect(status).toBe(400);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("get detail failed", (done) => {
    request(app)
      .get("/detail")
      .query({ title: "nvjdnienosjdnvos" })
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "Movie not found!")
        expect(body).toHaveProperty("response", [])
        expect(status).toBe(400);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("get search no title", (done) => {
    request(app)
      .get("/search")
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "please insert the title")
        expect(status).toBe(400);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("get detail no title", (done) => {
    request(app)
      .get("/detail")
      .then((response) => {
        const { body, status } = response;
        expect(body).toHaveProperty("message", "please insert the title")
        expect(status).toBe(400);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("not found page", (done) => {
    request(app)
      .get("/tidakAda")
      .then((response) => {
        const { text, status } = response;
        expect(text).toBe("<h1>Page Not Found</h1>")
        expect(status).toBe(404);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

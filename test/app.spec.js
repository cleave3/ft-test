const request = require("supertest");
const subject = require("../app");

describe("Testing the server", () => {
    it("can run the express server and return a 200", async () => {
        const response = await request(subject).get("/");
        expect(response.statusCode).toBe(200);
    });
});

// add your own tests here
describe("/JSX", () => {
    it("should return status of 200", async () => {
        const response = await request(subject).get("/jsx");
        expect(response.header["content-type"]).toBe("text/html; charset=utf-8");
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Financial Times");
    });
});

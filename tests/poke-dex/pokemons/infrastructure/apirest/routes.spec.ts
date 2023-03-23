import request from "supertest";
import { app } from  "../../../../../src/poke-dex/app";

describe("GET /type", () => {
  it("should return 200 OK with a pokemon name as param", async () => {
    const response = await request(app).get("/type?pokemon_name=pikachu");
    expect(response.status).toBe(200);
  });

  it("should return a pokemon type in json with a pokemon name as param", async () => {
    const response = await request(app).get("/type?pokemon_name=pikachu");
    const stringifiedResponse = JSON.stringify(response.body);
    expect(stringifiedResponse).toContain("electric");
  });

  it("should return 404 NOT FOUND with a pokemon name as param", async () => {
    const response = await request(app).get("/type?pokemon_name=invalid");
    expect(response.status).toBe(404);
  });
});

describe("GET /pokemons/:id", () => {
  it("should return 200 OK with a pokemon id as param", async () => {
    const response = await request(app).get("/pokemon/1");
    expect(response.status).toBe(200);
  });

  it("should return 404 NOT FOUND with an invalid pokemon id as param", async () => {
    const response = await request(app).get("/pokemon/123123123123");
    expect(response.status).toBe(404);
  });
});

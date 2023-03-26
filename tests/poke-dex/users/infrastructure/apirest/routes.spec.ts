import request from "supertest";
import { app } from "../../../../../src/poke-dex/app";
import CreateUserDTO from "../../../../../src/poke-dex/users/application/dtos/create-user.dto";

describe("User routes", () => {
  describe("POST /user", () => {
    it("should return 201 OK when user is created", async () => {
      const userDto = new CreateUserDTO();
      userDto.id = 1;
      userDto.name = 'Test';

      const response = await request(app).post("/user").send(userDto);
      expect(response.status).toBe(201);
    });

    it("should return 500 with invalid payload", async () => {
      const response = await request(app).post("/user").send({});
      expect(response.status).toBe(500);
    });
  });

  describe("PATCH /user/:userId/favourites", () => {
    it("should return 200 OK when pokemon is added to favourites", async () => {
      const response = await request(app).patch("/user/1/favourites").send({ pokemon_id: 1 });
      expect(response.status).toBe(200);
    });
  });
})

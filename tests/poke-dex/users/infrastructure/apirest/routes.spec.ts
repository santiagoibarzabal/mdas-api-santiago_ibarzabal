import request from "supertest";
import { app } from "../../../../../src/poke-dex/app";
import CreateUserDTO from "../../../../../src/poke-dex/users/application/dtos/create-user.dto";

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

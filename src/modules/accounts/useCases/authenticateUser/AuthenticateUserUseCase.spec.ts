import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("AuthenticateUserUseCase test suit", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "1231",
      email: "user@test.com",
      name: "User Test",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("Should not be able to authenticate an user with wrong email", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1231",
        email: "user@test.com",
        name: "User Test",
        password: "1234",
      };

      await createUserUseCase.execute(user);

      const result = await authenticateUserUseCase.execute({
        email: "test@test.com",
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with wrong password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1231",
        email: "user@test.com",
        name: "User Test",
        password: "1234",
      };

      await createUserUseCase.execute(user);

      const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: "password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an nonexistent user", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1231",
        email: "user@test.com",
        name: "User Test",
        password: "1234",
      };

      await createUserUseCase.execute(user);

      const result = await authenticateUserUseCase.execute({
        email: "test@test.com",
        password: "password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

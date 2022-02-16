import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!", 401);
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new AppError("Email or password incorrect!", 401);
    }

    const tokenValid = sign({}, "a7b71b7b48466113992530a9900c2462", {
      subject: user.id,
      expiresIn: "1d",
    });

    const returnToken: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token: tokenValid,
    };

    return returnToken;
  }
}

export { AuthenticateUserUseCase };

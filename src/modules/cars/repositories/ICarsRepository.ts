import { ICreateCarDTO } from "../dtos/iCreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate): Promise<Car>;
}

export { ICarsRepository };

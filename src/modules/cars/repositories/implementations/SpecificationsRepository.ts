import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO } from "../ISpecificationsRepository";

class SpecificationsRepository {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list() {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((cat) => cat.name === name);

    return specification;
  }
}

export { SpecificationsRepository };
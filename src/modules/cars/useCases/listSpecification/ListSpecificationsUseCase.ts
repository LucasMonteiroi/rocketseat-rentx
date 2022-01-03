import { Specification } from "../../entities/Specification";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ICategoriesRepository) { }

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };

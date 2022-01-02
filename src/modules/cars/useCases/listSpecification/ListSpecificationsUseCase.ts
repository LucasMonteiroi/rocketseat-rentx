import { Specification } from "../../model/Specification";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ICategoriesRepository) { }

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };

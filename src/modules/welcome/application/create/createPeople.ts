import { PeopleRepository } from './../../domain/PeopleRepository';
import { People } from "../../domain/People";

export function createPeople(peopleRepository: PeopleRepository, people: People): void {
	// ensurePeopleIsValid(people);

	peopleRepository.save(people);
}
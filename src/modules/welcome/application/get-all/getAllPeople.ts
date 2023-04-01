import { PeopleRepository } from './../../domain/PeopleRepository';
import { People } from './../../domain/People';

export function getAllPeople(peopleRepository: PeopleRepository): People[] {
	return peopleRepository.getAll();
}
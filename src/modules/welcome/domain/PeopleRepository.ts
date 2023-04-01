import { People } from "./People";

export interface PeopleRepository {
	save: (people: People) => void;
	get: (name: string) => People | null;
	getAll: () => People[];
}
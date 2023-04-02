import { People } from "../domain/People";
import { PeopleRepository } from "../domain/PeopleRepository";

export function createLocalStoragePeopleRepository(): PeopleRepository {
	return {
		save,
		get,
		getAll,
		getPeopleList,
	};
}

async function getPeopleList() {
	const res = await fetch("/api/welcome");
	return res.json()
}

function save(people: People) {
	const peoples = getAllFromLocalStorage();
  peoples.set(people.id ,people)
	localStorage.setItem("peoples", JSON.stringify(Array.from(peoples.entries())));
}

function get(id: string) {
	const peoples = getAllFromLocalStorage();
	const people = peoples.get(id);

	if (!people) {
		return null;
	}

	return people;
}

function getAll() {
	const peoples = getAllFromLocalStorage();

	return Array.from(peoples.values());
}

function getAllFromLocalStorage(): Map<string, People> {
	const peoples = localStorage.getItem("peoples");

	if (peoples === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(peoples) as Iterable<[string, People]>);

	return map;
}
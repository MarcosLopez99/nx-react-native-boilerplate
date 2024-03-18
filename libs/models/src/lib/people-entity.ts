export interface PeopleEntity {
  people: PersonEntity[];
}

export interface PersonEntity {
  name: Name;
  email: string;
  phone: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

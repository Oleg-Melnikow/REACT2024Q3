export interface ResultPeoople {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  url: string;
  vehicles: string[];
  starships: string[];
  species: string[];
}

export interface GetPeopleData {
  people: People[];
  count: number;
  isPagination: boolean;
}

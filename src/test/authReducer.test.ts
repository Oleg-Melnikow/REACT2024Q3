import { GetPeopleData, People } from "../interfaces/interface";
import {
  AppInitialState,
  appReducer,
  chnageIsError,
  getDataPeople,
  loading,
  setCurrentPerson,
} from "../reducers/appReducer";

describe("authReducer testing", () => {
  const initialState = AppInitialState;

  const person: People = {
    birth_year: "12y",
    eye_color: "grey",
    films: [],
    gender: "male",
    hair_color: "blue",
    height: "178",
    mass: "72",
    name: "Jhon",
    homeworld: "",
    skin_color: "dark",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
  };

  const peopleData: GetPeopleData = {
    count: 1,
    isPagination: false,
    people: [person],
  };

  it("should return the state with correct data when loading action is called", () => {
    const loadingAction = loading(true);
    const result = appReducer(initialState, loadingAction);
    expect(result).toEqual({ ...initialState, isLoading: true });
  });

  it("should return the state with correct data when call errors", () => {
    const loadingAction = chnageIsError(true);
    const result = appReducer(initialState, loadingAction);
    expect(result).toEqual({ ...initialState, isError: true });
  });

  it("should return data person when get data for it", () => {
    const loadingAction = setCurrentPerson(person);
    const result = appReducer(initialState, loadingAction);
    expect(result).toEqual({ ...initialState, currentPerson: person });
  });

  it("should return data for people list when get data for it", () => {
    const loadingAction = getDataPeople(peopleData);
    const result = appReducer(initialState, loadingAction);
    expect(result).toEqual({ ...initialState, ...peopleData });
  });
});

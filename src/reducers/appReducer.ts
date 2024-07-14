import { createContext } from "react";
import { GetPeopleData, People } from "../interfaces/interface";

export interface AppStateType extends GetPeopleData {
  isLoading: boolean;
  isError: boolean;
  currentPerson: People | null;
}

export const AppInitialState: AppStateType = {
  people: [],
  isLoading: true,
  isError: false,
  count: 0,
  isPagination: false,
  currentPerson: null,
};

export const appReducer = (
  state: AppStateType,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case "app/StarWars/SET-IS-LOADING":
    case "app/StarWars/GET-DATA-PEOPLE":
    case "app/StarWars/SET-CURRENT-PERSON":
    case "app/StarWars/CHANGE-ISERROR":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const loading = (isLoading: boolean) =>
  ({
    type: "app/StarWars/SET-IS-LOADING",
    payload: { isLoading },
  }) as const;

export const getDataPeople = (payload: GetPeopleData) =>
  ({
    type: "app/StarWars/GET-DATA-PEOPLE",
    payload,
  }) as const;

export const chnageIsError = (isError: boolean) =>
  ({
    type: "app/StarWars/CHANGE-ISERROR",
    payload: { isError },
  }) as const;

export const setCurrentPerson = (currentPerson: People | null) =>
  ({
    type: "app/StarWars/SET-CURRENT-PERSON",
    payload: { currentPerson },
  }) as const;

type ActionsType =
  | ReturnType<typeof loading>
  | ReturnType<typeof getDataPeople>
  | ReturnType<typeof chnageIsError>
  | ReturnType<typeof setCurrentPerson>;

export interface AppContextValue extends AppStateType {
  getItems: (searchValue?: string) => Promise<void>;
  getPerson: (id: string) => Promise<void>;
  setIsError: (isError: boolean) => void;
  resetDetails: () => void;
}

export const AppContext = createContext<AppContextValue>({
  ...AppInitialState,
  getItems: () => Promise.resolve(),
  getPerson: () => Promise.resolve(),
  setIsError: () => {},
  resetDetails: () => {},
});

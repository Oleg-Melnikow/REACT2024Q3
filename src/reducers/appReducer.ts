import { GetPeopleData } from "interfaces/interface";
import { createContext } from "react";

export interface AppStateType extends GetPeopleData {
  isLoading: boolean;
  isError: boolean;
}

export const AppInitialState: AppStateType = {
  people: [],
  isLoading: true,
  isError: false,
  count: 0,
  isPagination: false,
};

export const appReducer = (
  state: AppStateType,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case "app/StarWars/SET-IS-LOADING":
    case "app/StarWars/GET-DATA-PEOPLE":
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

type ActionsType =
  | ReturnType<typeof loading>
  | ReturnType<typeof getDataPeople>
  | ReturnType<typeof chnageIsError>;

export interface AppContextValue extends AppStateType {
  getItems: (searchValue?: string) => Promise<void>;
  setIsError: (isError: boolean) => void;
}

export const AppContext = createContext<AppContextValue>({
  ...AppInitialState,
  getItems: () => Promise.resolve(),
  setIsError: () => {},
});

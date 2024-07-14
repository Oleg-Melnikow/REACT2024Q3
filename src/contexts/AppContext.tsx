import { searchAPI } from "api/api";
import { People, ResultPeoople } from "interfaces/interface";
import {
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppContext,
  AppInitialState,
  appReducer,
  chnageIsError,
  getDataPeople,
  loading,
  setCurrentPerson,
} from "reducers/appReducer";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): ReactElement {
  const [state, dispatch] = useReducer(appReducer, AppInitialState);
  const navigate = useNavigate();
  const { search } = useLocation();

  const getItems = useCallback(async (searchValue?: string): Promise<void> => {
    dispatch(loading(true));
    try {
      const result = searchValue
        ? await searchAPI.searchItems(searchValue)
        : await searchAPI.getItems();
      const { results, count } = result.data as ResultPeoople;
      const isPagination = count - results.length > 0;
      dispatch(getDataPeople({ people: results, count, isPagination }));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(loading(false));
    }
  }, []);

  const getPerson = useCallback(
    async (id: string): Promise<void> => {
      dispatch(loading(true));
      try {
        const result = await searchAPI.getPeople(id);
        const person = result.data as People;
        dispatch(setCurrentPerson(person));
        navigate(`/details/${id}${search}`);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(loading(false));
      }
    },
    [navigate, search]
  );

  const setIsError = useCallback((isError: boolean): void => {
    dispatch(chnageIsError(isError));
  }, []);

  const resetDetails = useCallback((): void => {
    dispatch(setCurrentPerson(null));
    navigate(`/${search}`);
  }, [navigate, search]);

  const contextValue = useMemo(
    () => ({ ...state, getItems, setIsError, getPerson, resetDetails }),
    [state, setIsError, getItems, getPerson, resetDetails]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

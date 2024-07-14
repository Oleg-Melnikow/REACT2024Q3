import { searchAPI } from "api/api";
import { ResultPeoople } from "interfaces/interface";
import {
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import {
  AppContext,
  AppInitialState,
  appReducer,
  chnageIsError,
  getDataPeople,
  loading,
} from "reducers/appReducer";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): ReactElement {
  const [state, dispatch] = useReducer(appReducer, AppInitialState);

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

  const setIsError = useCallback((isError: boolean): void => {
    dispatch(chnageIsError(isError));
  }, []);

  const contextValue = useMemo(
    () => ({ ...state, getItems, setIsError }),
    [state, setIsError, getItems]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

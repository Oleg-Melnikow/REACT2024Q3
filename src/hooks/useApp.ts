import { useContext } from "react";
import { AppContext, AppContextValue } from "reducers/appReducer";

const useApp = (): AppContextValue => useContext(AppContext);

export default useApp;

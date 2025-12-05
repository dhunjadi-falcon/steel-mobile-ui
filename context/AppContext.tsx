/* import AsyncStorage from "@react-native-async-storage/async-storage"; */
import React, { createContext, useContext, useMemo, useReducer } from "react";

export interface ContextState {
  isDarkThemeOn: boolean;
}

export const initialAppContextState: ContextState = {
  isDarkThemeOn: false,
};

export enum ActionType {
  TOGGLE_DARK_THEME = "TOGGLE_DARK_THEME",
  SET_ENTIRE_STATE = "SET_ENTIRE_STATE",
}

export type Action = {
  type: ActionType;
  payload?: ContextState | Partial<ContextState>;
};

interface ISTLFormContext {
  state: ContextState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<ISTLFormContext>({
  state: {} as ContextState,
  dispatch: () => {},
});

export function FormReducer(state: ContextState, action: Action): ContextState {
  switch (action.type) {
    case ActionType.TOGGLE_DARK_THEME:
      return {
        ...state,
        ...(action.payload as Partial<ContextState>),
      };
    case ActionType.SET_ENTIRE_STATE:
      return action.payload as ContextState;
    default:
      return state;
  }
}

export function AppContextProvider({
  ...children
}: {
  children?: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(FormReducer, initialAppContextState);

  /*   useEffect(() => {
    const loadState = async () => {
      const storedState = await AsyncStorage.getItem("AppState");

      if (storedState) {
        const parsedState = JSON.parse(storedState);

        dispatch({
          type: ActionType.SET_ENTIRE_STATE,
          payload: parsedState,
        });
      }
    };

    loadState();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("AppState", JSON.stringify(state));
  }, [state]); */

  const AppContextObj = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return <AppContext.Provider value={AppContextObj} {...children} />;
}

export const useAppContext = () => useContext(AppContext);

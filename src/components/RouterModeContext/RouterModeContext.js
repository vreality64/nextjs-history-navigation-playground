import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const Mode = {
  Native: 'Native',
  Router: 'Router',
}

export function RouterModeProvider({ children, initialMode = Mode.Native }) {
  const [mode, changeMode] = useState(initialMode);

  return <Context.Provider value={{ mode, changeMode }}>{children}</Context.Provider>
}

export function useRouterMode() {
  return useContext(Context);
}
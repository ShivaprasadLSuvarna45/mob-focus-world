import {MainStoreData, MainStoreAction} from '@FocusWorld/types';
import React, {createContext, useReducer} from 'react';

export const MainStoreContext = createContext<MainStore>(null);
export const MainStoreDispatchContext = createContext<MainStoreAction>(null);

function storeReducer(store: MainStoreData, action: MainStoreAction) {
  switch (action.type) {
    case MainStoreAction.LOADING: {
      return {...store, loading: action.loading || true};
    }
    case MainStoreAction.LOGIN: {
      return {...store, user: action.user};
    }
    case MainStoreAction.LOGOUT: {
      return {...initialMainStore};
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialMainStore = {
  loading: false,
  user: null,
  country: null,
};

const MainStore = ({children}: {children: JSX.Element}) => {
  const [store, dispatch] = useReducer(storeReducer, initialMainStore);

  return (
    <MainStoreContext.Provider value={store}>
      <MainStoreDispatchContext.Provider value={dispatch}>
        {children}
      </MainStoreDispatchContext.Provider>
    </MainStoreContext.Provider>
  );
};

export default MainStore;

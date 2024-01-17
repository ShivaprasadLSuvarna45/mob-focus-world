import {
  MainStoreContext,
  MainStoreDispatchContext,
} from '@FocusWorld/Features/Setup/MainStore';
import {MainStoreAction} from '@FocusWorld/types';
import {useContext} from 'react';

const useMainStore = () => {
  const dispatch = useContext(MainStoreDispatchContext);
  const storeData = useContext(MainStoreContext);

  const {loading, user, country} = storeData;

  const setUser = (user: object) =>
    dispatch({
      type: MainStoreAction.LOGIN,
      user,
    });

  const logout = () => dispatch({type: MainStoreAction.LOGOUT});

  return {
    isLoading: loading,
    user,
    country,
    setUser,
    logout,
  };
};

export default useMainStore;

import {
  MainStoreContext,
  MainStoreDispatchContext,
} from '@FocusWorld/Setup/MainStore';
import {COUNTRY, MainStoreAction} from '@FocusWorld/types';
import {useContext} from 'react';

const useMainStore = () => {
  const dispatch = useContext(MainStoreDispatchContext);
  const storeData = useContext(MainStoreContext);

  const {loading, user, country} = storeData || {};

  const setUser = (autUser: object) =>
    dispatch({
      type: MainStoreAction.LOGIN,
      user: autUser,
    });

  const logout = async () => {
    dispatch({type: MainStoreAction.LOGOUT});
  };

  const updateCountry = (country: COUNTRY) =>
    dispatch({type: MainStoreAction.CHANGE_COUNTRY, country});

  const setLoading = (loading = true) =>
    dispatch({type: MainStoreAction.LOADING, loading});

  return {
    isLoading: loading,
    user,
    country,
    setUser,
    logout,
    updateCountry,
    setLoading,
  };
};

export default useMainStore;

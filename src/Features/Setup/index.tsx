import React from 'react';
import Firebase from './Firebase';
import MainStore from './MainStore';
import Login from '@FocusWorld/Features/Login';

const Setup = () => {
  return (
    <MainStore>
      <Firebase>
        <Login />
      </Firebase>
    </MainStore>
  );
};

export default Setup;

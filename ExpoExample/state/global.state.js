import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import THEMES from 'app/constants/themes';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a Provider');
  }
  return context;
};

export default function GlobalProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    theme: THEMES.light
  });
  const actions = {
    updateGlobal: changes => setState({ ...state, ...changes })
  };
  return <GlobalContext.Provider value={{ state, actions }}>{children}</GlobalContext.Provider>;
}
GlobalProvider.propTypes = {
  children: PropTypes.node
};
GlobalProvider.defaultProps = {
  children: null
};
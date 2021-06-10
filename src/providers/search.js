import React from "react";
// import { observable } from "mobx";
import SearchStore from '../store/search';

const context = React.createContext(new SearchStore());

export const useSearchStore = () => {
  return React.useContext(context);
};

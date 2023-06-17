import { OPEN_SIDERBAR, CLOSE_SIDEBAR } from "../actions";

const sidebar_reducers = (state, action) => {
  if (action.type === OPEN_SIDERBAR) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default sidebar_reducers;

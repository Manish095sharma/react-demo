import { combineReducers } from "redux";

import UpdateCartgoryReducer from "./UpdateCartgoryReducer";

export default combineReducers({
  selected_categories: UpdateCartgoryReducer
});

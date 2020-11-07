import { SELECT_CATEGORY } from "./action_types";

export const select_category = data => {
    return {
        type: SELECT_CATEGORY,
        payload: { data }
    };
};

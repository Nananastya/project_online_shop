import { MODAL_WINDOW_SHOW_TRUE, 
    MODAL_WINDOW_SHOW_FALSE } from "../actions";

export function modalWindowShowReducer(show = false, action) {
    switch (action.type) {
      case MODAL_WINDOW_SHOW_TRUE:
        return true;
      case MODAL_WINDOW_SHOW_FALSE:
        return false;
      default:
        return show;
    }
}
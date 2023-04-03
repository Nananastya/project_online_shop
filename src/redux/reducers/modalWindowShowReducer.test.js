import { MODAL_WINDOW_SHOW_TRUE, MODAL_WINDOW_SHOW_FALSE } from "../actions";
import { modalWindowShowReducer } from "./modalWindowShowReducer";

describe('ModalWindowShowReducer', () => {
  test('should return the initial state', () => {
    const initialState = false;
    expect(modalWindowShowReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle MODAL_WINDOW_SHOW_TRUE', () => {
    const action = { type: MODAL_WINDOW_SHOW_TRUE };
    expect(modalWindowShowReducer(false, action)).toEqual(true);
  });

  test('should handle MODAL_WINDOW_SHOW_FALSE', () => {
    const action = { type: MODAL_WINDOW_SHOW_FALSE };
    expect(modalWindowShowReducer(true, action)).toEqual(false);
  });
});

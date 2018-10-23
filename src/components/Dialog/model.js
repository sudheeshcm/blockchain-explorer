export const initialState = {
  open: false,
  type: '',
  scrollType: 'paper',
};
export default {
  state: initialState,
  reducers: {
    open: (state, payload) => ({
      ...state,
      open: true,
      type: payload.type,
    }),
    close: state => ({
      ...state,
      open: false,
    }),
  },
};

export const initialState = {
  open: false,
  content: '',
  type: 'info',
};
export default {
  state: initialState,
  reducers: {
    show: (state, payload) => ({
      ...state,
      open: true,
      content: payload.content,
      type: payload.type,
    }),
    hide: state => ({
      ...state,
      open: false,
    }),
  },
};

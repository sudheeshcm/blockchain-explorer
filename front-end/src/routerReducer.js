const merge = (state, payload) => ({ ...state, ...payload });

export default history => {
  const initialState = {
    location: history.location,
    action: history.action,
  };
  return (state = initialState, { type, payload } = {}) => {
    if (type === '@@router/LOCATION_CHANGE') {
      return merge(state, payload);
    }
    return state;
  };
};

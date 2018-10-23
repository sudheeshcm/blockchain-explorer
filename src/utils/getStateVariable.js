import store from '@Root/store';

const getStateVariable = ({ model, field }) => {
  const data = store ? store.getState()[model] : null;

  if (data) {
    return data[field];
  }
  return null;
};

export default getStateVariable;

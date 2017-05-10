const types = {
  SELECT_LIBRARY: 'SELECT_LIBRARY',
};

export default (state = null, action) => {
  switch(action.type) {
    case types.SELECT_LIBRARY:
      return action.payload;
    default:
      return state
  }
};

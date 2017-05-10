const types = {
  SELECT_LIBRARY: 'SELECT_LIBRARY',
};

//noinspection JSUnusedGlobalSymbols
export const selectLibrary = (libraryId) => {
  return {
    type: types.SELECT_LIBRARY,
    payload: libraryId,
  }
};

function createReducer(initialState, map) {
  return (state = initialState, action = {}) => {
    const reducer = map[action.type];

    return reducer ? { ...state, ...reducer(state, action) } : state;
  };
}

export default createReducer;

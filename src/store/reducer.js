const initialState = {
  token: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_STRING":
      return {
        ...state,
        token: action.payload.string
      }
    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload.token
      }
    default:
      return state
  }
}

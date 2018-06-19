const initialState = {
  token: "..."
}

export function reducer(state = initialState, action)
{
  switch (action.type) {
    case "CHANGE_STRING":
      return {
        ...state,
        token: action.payload.string
      }
    default:
      return state
  }
}

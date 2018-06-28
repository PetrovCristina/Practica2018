export const changeData = string => ({
  type: 'CHANGE_STRING',
  payload: {
    string
  }
})

export const saveToken = token => ({
  type: 'SAVE_TOKEN',
  payload: {
    token
  }
})

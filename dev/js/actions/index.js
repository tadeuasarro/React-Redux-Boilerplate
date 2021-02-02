export const selectUser = user => {
  console.log("User: ", user.first)
  return ({
    type: 'USER_SELECTED',
    payload: user
  })
}

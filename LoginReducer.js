export function login(loginState = {}, action) {
  if (action.type === "LOGIN_START") {
    return {
      ...loginState,
      isRunning: true
    }
  }
  if (action.type === "LOGIN_DONE") {
    return {
      ...loginState,
      token: action.token,
      id: action.id,
      isRunning: false
    }
  }
  if (action.type === "LOGIN_ERROR") {
    return {
      ...loginState,
      token: "",
      errorMessage: action.errorMessage,
      isRunning: false
    }
  } else {
    return loginState;
  }
}

export function loginStart() {
  return {
    type: "LOGIN_START"
  }
}

export function loginDone(token) {
  return {
    type: "LOGIN_DONE",
    token
  }
}

export function loginError(errorMessage) {
  return {
    type: "LOGIN_ERROR",
    errorMessage
  }
}

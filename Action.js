export function loginStart() {
  return {
    type: "LOGIN_START"
  }
}

export function loginDone(token, id) {
  return {
    type: "LOGIN_DONE",
    token,
    id
  }
}

export function loginError(errorMessage) {
  return {
    type: "LOGIN_ERROR",
    errorMessage
  }
}

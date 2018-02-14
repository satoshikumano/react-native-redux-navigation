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

export function lognAsync(username, password) {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const user = await this.login(username, password);
      dispatch(loginDone(user.token, user.id));
      dispatch({type: "NAV_LOGIN"});
    } catch (err) {
      dispatch(loginError(err.message));
    }
  }
}


async function login (username, password) {
  let grant_type = 'password';
  const response = await fetch('https://api-jp.kii.com/api/apps/dc0y34o1f8vf/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kii-Appid' : 'dc0y34o1f8vf',
        'X-Kii-Appkey' : 'bb0b232c4ec64a34a7d08256a45bee66'
      },
      body: JSON.stringify({
          grant_type,
          username,
          password
      }),
  });
  if (200 <= response.status && response.status < 300) {
    const json = await response.json();
    console.log(JSON.stringify(json));
    return {
      token: json.access_token,
      id: json.id,
    };
    } else {
      throw new Error("Failed to login: " + response.status);
    }
  }

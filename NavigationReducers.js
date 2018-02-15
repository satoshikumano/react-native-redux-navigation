import RootStack from './RootStack'
import { NavigationActions } from 'react-navigation'

export const initialState = RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams('LOGIN'))

export const navReducer = (state = initialState, action) => {
  let nextState

  if (action.type === 'NAV_LOGIN') {
    nextState = RootStack.router.getStateForAction(
      NavigationActions.reset(
        {
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'HOME' })]
        }
      ),
      state
    )
  }
  if (action.type === 'NAV_LOGOUT') {
    nextState = RootStack.router.getStateForAction(
      NavigationActions.reset(
        {
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'LOGIN' })]
        }
      ),
      state
    )
  }
  return nextState || state
}

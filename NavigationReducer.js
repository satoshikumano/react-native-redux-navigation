import RootStack from './RootStack';

export const initialState = RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams('LOGIN'));

export const navReducer = (state = initialState, action) => {
  const nextState = RootStack.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

